'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'none'
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  direction = 'up',
}: FadeInProps) {
  const initial =
    direction === 'up'
      ? { opacity: 0, y: 32 }
      : direction === 'left'
        ? { opacity: 0, x: -24 }
        : { opacity: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
