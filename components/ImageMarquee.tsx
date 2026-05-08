'use client'

import Image from 'next/image'

const items = [
  { src: '/aida/Hero.png',      bgColor: '#1C0F35', color: '#E1CAFF', label: 'AIDA' },
  { src: '/aida/detail-1.png',  bgColor: '#1C0F35', color: '#E1CAFF', label: 'AIDA' },
  { src: '/racetrac/Hero.png',  bgColor: '#06141F', color: '#40C4F3', label: 'RaceTrac' },
  { src: '/aida/process.png',   bgColor: '#1C0F35', color: '#E1CAFF', label: 'AIDA' },
  { src: '/snackworks/Hero.png', bgColor: '#0D0820', color: '#9942FF', label: 'Snackworks' },
  { src: '/aida/detail-2.png',  bgColor: '#1C0F35', color: '#E1CAFF', label: 'AIDA' },
  { src: '/visa/Hero.png',      bgColor: '#081018', color: '#60A5FA', label: 'Visa Analytics' },
  { src: '/aida/final.png',     bgColor: '#1C0F35', color: '#E1CAFF', label: 'AIDA' },
]

type Item = typeof items[0]

function Slide({ item }: { item: Item }) {
  return (
    <div
      className="relative shrink-0 w-80 h-52 overflow-hidden"
      style={{ backgroundColor: item.bgColor }}
    >
      {item.src ? (
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover"
          sizes="320px"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: item.color + '66' }}
          >
            {item.label}
          </span>
        </div>
      )}
    </div>
  )
}

export default function ImageMarquee() {
  const doubled = [...items, ...items]

  return (
    <div className="w-full overflow-hidden border-y border-border">
      <div
        className="flex gap-px"
        style={{ animation: 'marquee 32s linear infinite', width: 'max-content' }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused' }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running' }}
      >
        {doubled.map((item, i) => (
          <Slide key={i} item={item} />
        ))}
      </div>
    </div>
  )
}
