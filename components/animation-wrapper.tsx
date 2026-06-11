'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimationWrapperProps {
  children: ReactNode
  delay?: number
  duration?: number
  type?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
  className?: string
}

export function AnimationWrapper({
  children,
  delay = 0,
  duration = 0.6,
  type = 'fadeIn',
  className = '',
}: AnimationWrapperProps) {
  const variants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
    },
  }

  return (
    <motion.div
      className={className}
      initial={variants[type].initial}
      whileInView={variants[type].animate}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
