'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NODE_DATA = [
  { label: 'AIDA',          color: '#E1CAFF', href: '/work/aida',          thumbnail: '/aida/Hero.png' },
  { label: 'RaceTrac',      color: '#40C4F3', href: '/work/racetrac',      thumbnail: '/racetrac/Hero.png' },
  { label: 'Snackworks',    color: '#9942FF', href: '/work/snackworks',    thumbnail: '/snackworks/Hero.png' },
  { label: 'Visa',          color: '#60A5FA', href: '/work/visa-analytics', thumbnail: '/visa/Hero.png' },
  { label: 'Motion',        color: '#CDFF00', href: '/motion',             thumbnail: '/motion/circle.gif' },
]

const RADIUS = 12
const BASE_SPEED = 0.35

interface NodeState {
  x: number
  y: number
  vx: number
  vy: number
  label: string
  color: string
  href: string
  thumbnail: string
}

interface Hovered {
  node: NodeState
  mx: number
  my: number
}

export default function NodeGraph() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const nodesRef   = useRef<NodeState[]>([])
  const rafRef     = useRef<number>(0)
  const timeRef    = useRef(0)
  const hoveredRef = useRef<Hovered | null>(null)
  const [hovered, setHovered] = useState<Hovered | null>(null)
  const router = useRouter()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const init = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (!w || !h) return
      canvas.width  = w
      canvas.height = h

      nodesRef.current = NODE_DATA.map((d, i) => {
        const angle = (i / NODE_DATA.length) * Math.PI * 2 - Math.PI / 2
        const rx = w * 0.30
        const ry = h * 0.30
        const cx = w / 2 + Math.cos(angle) * rx + (Math.random() - 0.5) * 70
        const cy = h / 2 + Math.sin(angle) * ry + (Math.random() - 0.5) * 70
        const dir = Math.random() * Math.PI * 2
        const speed = BASE_SPEED * (0.7 + Math.random() * 0.6)
        const pad = RADIUS + 16
        return {
          ...d,
          x: Math.max(pad, Math.min(w - pad, cx)),
          y: Math.max(pad, Math.min(h - pad, cy)),
          vx: Math.cos(dir) * speed,
          vy: Math.sin(dir) * speed,
        }
      })
    }

    init()
    window.addEventListener('resize', init)

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      timeRef.current += 1

      const nodes = nodesRef.current
      const pad = RADIUS + 16

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < pad || n.x > w - pad) { n.vx *= -1; n.x = Math.max(pad, Math.min(w - pad, n.x)) }
        if (n.y < pad || n.y > h - pad) { n.vy *= -1; n.y = Math.max(pad, Math.min(h - pad, n.y)) }
      }

      // Dashed connecting lines — animated offset
      ctx.save()
      ctx.setLineDash([3, 8])
      ctx.lineDashOffset = -(timeRef.current * 0.22)
      ctx.lineWidth = 1.5
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx.strokeStyle = 'rgba(255,255,255,0.22)'
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(nodes[j].x, nodes[j].y)
          ctx.stroke()
        }
      }
      ctx.restore()

      // Nodes
      for (const n of nodes) {
        const isHov = hoveredRef.current?.node === n
        const r = isHov ? RADIUS + 4 : RADIUS

        ctx.shadowBlur  = isHov ? 32 : 20
        ctx.shadowColor = n.color
        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = n.color
        ctx.fill()
        ctx.shadowBlur = 0
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', init)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top

    let found: NodeState | null = null
    for (const n of nodesRef.current) {
      const dx = mx - n.x
      const dy = my - n.y
      if (Math.sqrt(dx * dx + dy * dy) < RADIUS + 10) { found = n; break }
    }

    const next = found ? { node: found, mx, my } : null
    hoveredRef.current = next
    setHovered(next)
  }

  const handleMouseLeave = () => {
    hoveredRef.current = null
    setHovered(null)
  }

  const handleClick = () => {
    if (hoveredRef.current) router.push(hoveredRef.current.node.href)
  }

  // Clamp thumbnail so it stays inside the canvas
  const thumbLeft = hovered ? Math.min(hovered.mx + 20, (canvasRef.current?.offsetWidth ?? 600) - 196) : 0
  const thumbTop  = hovered ? Math.max(hovered.my - 90, 8) : 0

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ cursor: hovered ? 'pointer' : 'default' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />

      {hovered && (
        <div
          className="absolute pointer-events-none"
          style={{ left: thumbLeft, top: thumbTop }}
        >
          <div
            className="relative w-44 overflow-hidden border shadow-2xl"
            style={{ aspectRatio: '16/9', backgroundColor: '#0A0A0A', borderColor: hovered.node.color + '33' }}
          >
            <Image
              src={hovered.node.thumbnail}
              alt={hovered.node.label}
              fill
              unoptimized
              className="object-cover"
              sizes="176px"
            />
          </div>
          <p
            className="text-[10px] tracking-[0.2em] uppercase mt-2"
            style={{ color: hovered.node.color }}
          >
            {hovered.node.label}
          </p>
        </div>
      )}
    </div>
  )
}
