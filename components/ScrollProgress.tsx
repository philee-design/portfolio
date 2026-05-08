'use client'

import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress({ color = '#CDFF00' }: { color?: string }) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-left"
      style={{ scaleX: scrollYProgress, backgroundColor: color }}
    />
  )
}
