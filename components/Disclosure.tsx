'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

export default function Disclosure({
  title,
  children,
  color = '#555',
}: {
  title: string
  children: ReactNode
  color?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left py-5 group"
      >
        <span className="text-sm text-fg group-hover:text-accent transition-colors tracking-wide">
          {title}
        </span>
        <span
          className="text-xl text-muted group-hover:text-fg transition-colors w-6 text-center"
          style={{ lineHeight: 1 }}
        >
          {open ? '−' : '+'}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-4 text-base text-fg/70 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
