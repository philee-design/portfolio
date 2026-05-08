'use client'

import { motion } from 'framer-motion'

interface WordRevealProps {
  text: string
  className?: string
  style?: React.CSSProperties
  highlightWord?: string
  highlightColor?: string
  delay?: number
}

export default function WordReveal({
  text,
  className,
  style,
  highlightWord,
  highlightColor = '#FF6B35',
  delay = 0,
}: WordRevealProps) {
  const words = text.split(' ')

  return (
    <span className={className} style={style}>
      {words.map((word, i) => {
        const isHighlighted = highlightWord && word.replace(/[.,!?]/g, '') === highlightWord

        return (
          <span
            key={i}
            className="inline-block overflow-hidden leading-[1.1]"
            style={{ verticalAlign: 'bottom' }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: '110%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.65,
                delay: delay + i * 0.055,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ color: isHighlighted ? highlightColor : undefined }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </span>
  )
}
