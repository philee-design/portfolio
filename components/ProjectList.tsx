'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/projects'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function useScramble(text: string, active: boolean) {
  const [display, setDisplay] = useState(text)
  const frame = useRef(0)
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (interval.current) clearInterval(interval.current)

    if (!active) {
      setDisplay(text)
      frame.current = 0
      return
    }

    interval.current = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < frame.current / 2.5) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      frame.current += 1
      if (frame.current > text.length * 3) {
        clearInterval(interval.current!)
        setDisplay(text)
      }
    }, 28)

    return () => { if (interval.current) clearInterval(interval.current) }
  }, [active, text])

  return display
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const scrambled = useScramble(project.name.toUpperCase(), hovered)

  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/work/${project.id}`}
        className="group block py-8 md:py-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center gap-6 md:gap-10">
          {/* Index */}
          <span
            className="text-xs shrink-0 tabular-nums transition-colors duration-300 w-6"
            style={{
              fontFamily: 'var(--font-bricolage)',
              color: hovered ? project.color : '#555555',
            }}
          >
            {project.index}
          </span>

          {/* Info */}
          <div className="flex-1 min-w-0">
            {/* Scrambled name */}
            <h3
              className="text-2xl md:text-4xl font-extrabold leading-tight transition-colors duration-300 tracking-tight"
              style={{
                fontFamily: 'var(--font-bricolage)',
                color: hovered ? project.color : '#EDEDED',
              }}
            >
              {hovered ? scrambled : project.name}
            </h3>

            {/* Meta + NDA badge */}
            <div className="mt-1.5 flex items-center gap-3 flex-wrap">
              <p className="text-sm text-muted tracking-wide">
                {project.year}&nbsp;·&nbsp;{project.category}&nbsp;·&nbsp;{project.client}
              </p>
              {project.protected && (
                <span className="flex items-center gap-1 text-[11px] text-muted border border-border px-2 py-0.5">
                  <svg width="9" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  NDA ·{' '}
                  <a
                    href="mailto:philipleedesign@gmail.com?subject=AIDA Case Study Access"
                    className="underline underline-offset-2 hover:text-fg transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    request access
                  </a>
                </span>
              )}
            </div>

            {/* Skill tags — animate in on hover */}
            <div className="mt-3 hidden md:flex flex-wrap gap-2 min-h-[28px]">
              <AnimatePresence>
                {hovered &&
                  project.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 6, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.94 }}
                      transition={{ duration: 0.2, delay: i * 0.04, ease: 'easeOut' }}
                      className="text-[11px] px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: project.color + '55',
                        color: project.color,
                        backgroundColor: project.color + '11',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Thumbnail */}
          <div
            className="hidden md:flex shrink-0 w-40 lg:w-56 aspect-video items-center justify-center overflow-hidden relative transition-all duration-500 border"
            style={{
              backgroundColor: hovered ? project.bgColor : '#0F0F0F',
              borderColor: hovered ? project.color + '33' : '#1C1C1C',
            }}
          >
            {project.images?.hero ? (
              <Image
                src={project.images.hero}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500"
                style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
                sizes="224px"
              />
            ) : (
              <span
                className="text-[10px] tracking-widest uppercase absolute transition-opacity duration-300"
                style={{ color: project.color, opacity: hovered ? 0.5 : 0.2 }}
              >
                {project.name}
              </span>
            )}
          </div>

          {/* Arrow */}
          <motion.span
            className="text-xl shrink-0"
            animate={{
              x: hovered ? 4 : 0,
              color: hovered ? project.color : '#555555',
            }}
            transition={{ duration: 0.2 }}
            aria-hidden
          >
            →
          </motion.span>
        </div>
      </Link>
    </motion.li>
  )
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-border">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </ul>
  )
}
