'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/motion', label: 'Motion' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-sm font-700 tracking-widest uppercase text-fg hover:text-accent transition-colors"
          style={{ fontFamily: 'var(--font-bricolage)' }}
        >
          Philip Lee
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted hover:text-fg transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:philipleedesign@gmail.com"
              className="text-sm border border-border px-4 py-2 hover:border-accent hover:text-accent transition-colors tracking-wide"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-fg transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-fg transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-fg transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-bg px-6 py-6 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg text-fg hover:text-accent transition-colors"
              style={{ fontFamily: 'var(--font-bricolage)' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:philipleedesign@gmail.com"
            className="text-lg text-muted hover:text-accent transition-colors"
            style={{ fontFamily: 'var(--font-bricolage)' }}
          >
            philipleedesign@gmail.com
          </a>
        </div>
      )}
    </header>
  )
}
