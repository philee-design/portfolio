'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function HeroParallax({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -100])
  const opacity = useTransform(scrollY, [0, 450], [1, 0])

  return (
    <motion.div style={{ y, opacity }}>
      {children}
    </motion.div>
  )
}
