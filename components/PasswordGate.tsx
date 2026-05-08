'use client'

import { useState, useEffect, ReactNode } from 'react'
import Link from 'next/link'

const SESSION_KEY = 'aida-unlocked-v2'

interface PasswordGateProps {
  children: ReactNode
  password: string
  projectName: string
  color: string
}

export default function PasswordGate({ children, password, projectName, color }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setUnlocked(true)
    }
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === password) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
      setTimeout(() => setError(false), 2500)
    }
  }

  if (!mounted) return null
  if (unlocked) return <>{children}</>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Lock icon */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-8 border"
        style={{ borderColor: color + '44', backgroundColor: color + '11' }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color }}>
        Password Protected
      </p>
      <h2
        className="text-3xl md:text-5xl font-extrabold text-fg mb-3"
        style={{ fontFamily: 'var(--font-bricolage)' }}
      >
        {projectName}
      </h2>
      <p className="text-sm text-muted max-w-xs mb-10 leading-relaxed">
        This case study is protected under NDA.{' '}
        <a
          href="mailto:philipleedesign@gmail.com?subject=AIDA Case Study Access"
          className="text-fg hover:text-accent transition-colors underline underline-offset-2"
        >
          Request access
        </a>{' '}
        or enter the password below.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-3">
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter password"
          autoFocus
          className="w-full bg-transparent border px-5 py-3 text-sm text-fg placeholder:text-muted outline-none transition-colors focus:border-fg"
          style={{ borderColor: error ? '#FF6B35' : '#1C1C1C' }}
        />
        {error && (
          <p className="text-xs text-center" style={{ color: '#FF6B35' }}>
            Incorrect password. Request access above.
          </p>
        )}
        <button
          type="submit"
          className="w-full py-3 text-sm font-medium tracking-wide transition-all duration-300 border"
          style={{
            backgroundColor: color,
            borderColor: color,
            color: '#080808',
          }}
        >
          Unlock Case Study
        </button>
      </form>

      <Link
        href="/#work"
        className="mt-10 text-xs text-muted hover:text-fg transition-colors tracking-widest uppercase"
      >
        ← Back to work
      </Link>
    </div>
  )
}
