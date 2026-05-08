'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const phrases = [
  'thinks in systems',
  'builds prototypes',
  'animates ideas',
  'crafts interfaces',
  'sweats the details',
]

export default function RotatingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % phrases.length), 2400)
    return () => clearInterval(t)
  }, [])

  return (
    <span
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        height: '1.2em',
        lineHeight: '1.2',
        verticalAlign: 'middle',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'block', lineHeight: '1.2', color: '#FF6B35', whiteSpace: 'nowrap' }}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
