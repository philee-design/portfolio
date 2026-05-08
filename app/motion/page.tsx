import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Motion — Philip Lee',
  description: 'Motion design work by Philip Lee.',
}

const spanClass: Record<number, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
}

const pieces = [
  {
    title: 'Breakfast from Different Countries',
    gif: '/motion/breakfast from different countries.gif',
    url: 'https://vimeo.com/149483603',
    span: 2,
  },
  {
    title: 'Build It',
    gif: '/motion/build it.gif',
    url: 'https://vimeo.com/202833347',
    span: 1,
  },
  {
    title: 'Circle',
    gif: '/motion/circle.gif',
    url: 'https://vimeo.com/215760881',
    span: 1,
  },
  {
    title: "Father's Day",
    gif: "/motion/father's day.gif",
    url: 'https://vimeo.com/360057159',
    span: 1,
  },
  {
    title: "Mother's Day",
    gif: "/motion/mother's day.gif",
    url: 'https://vimeo.com/271691012',
    span: 1,
  },
  {
    title: 'Stairway to Heaven',
    gif: '/motion/stairway to heaven.gif',
    url: 'https://vimeo.com/215761752',
    span: 1,
  },
  {
    title: 'The Light from the Universe',
    gif: '/motion/the light from the unniverse.gif',
    url: 'https://vimeo.com/191612358',
    span: 2,
  },
]

export default function MotionPage() {
  return (
    <main className="pt-24">
      <section className="px-6 md:px-12 lg:px-16 pt-12 pb-24">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-6">Motion Design</p>
            <h1
              className="text-[clamp(48px,8vw,112px)] font-extrabold leading-[0.9] tracking-tight text-fg mb-16"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              In
              <br />
              <span className="text-accent">motion.</span>
            </h1>
          </FadeIn>

          {/* Bento grid */}
          <FadeIn delay={0.1}>
            <div
              className="grid grid-cols-3 gap-2"
              style={{ gridAutoRows: '300px' }}
            >
              {pieces.map((piece) => (
                <a
                  key={piece.title}
                  href={piece.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${spanClass[piece.span]} relative overflow-hidden group bg-border`}
                >
                  <Image
                    src={piece.gif}
                    alt={piece.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <p
                      className="text-sm font-bold text-fg leading-tight mb-1"
                      style={{ fontFamily: 'var(--font-bricolage)' }}
                    >
                      {piece.title}
                    </p>
                    <p className="text-[11px] tracking-widest uppercase text-muted">
                      View on Vimeo ↗
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-12 lg:px-16 py-8">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted tracking-wide">
          <span style={{ fontFamily: 'var(--font-bricolage)' }}>Philip Lee — Product Designer</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  )
}
