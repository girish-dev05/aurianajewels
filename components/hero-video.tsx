'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Video with fallback gradient */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="linear-gradient(135deg, rgba(107, 44, 44, 0.9) 0%, rgba(249, 184, 112, 0.7) 50%, rgba(255, 250, 245, 0.6) 100%)"
        >
          <source
            src="https://videos.pexels.com/video-files/3408480/3408480-sd_640_360_24fps.mp4"
            type="video/mp4"
          />
          {/* Fallback gradient if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-maroon-800 via-champagne-400 to-ivory-50" />
        </video>

        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Premium glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ivory-50/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          {/* Decorative top element */}
          <motion.div
            custom={0}
            variants={textVariants}
            className="mb-8 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-champagne-400" />
            <span className="text-champagne-400 font-serif text-lg tracking-widest uppercase">
              By Seema Samar
            </span>
            <Sparkles className="w-5 h-5 text-champagne-400" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance drop-shadow-lg"
          >
            Studio Auriana
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={textVariants}
            className="text-xl sm:text-2xl text-ivory-100 mb-8 max-w-2xl text-balance drop-shadow-md"
          >
            Exquisite Artificial Jewellery for Every Precious Moment
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            variants={textVariants}
            className="text-lg text-champagne-200 mb-12 max-w-xl leading-relaxed drop-shadow-md"
          >
            Handcrafted luxury jewelry combining traditional artistry with contemporary elegance. 
            Kundan, Polki, and Moissanite collections for weddings and celebrations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button className="px-8 py-4 bg-champagne-400 hover:bg-champagne-500 text-maroon-900 font-serif font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Explore Collections
            </button>
            <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-serif font-bold rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-md border border-white/40 shadow-2xl">
              View All Products
            </button>
          </motion.div>

          {/* Floating brand tagline */}
          <motion.div
            custom={5}
            variants={textVariants}
            className="flex items-center gap-3 text-champagne-300"
          >
            <div className="h-px w-12 bg-champagne-400" />
            <span className="font-serif text-sm tracking-widest">LUXURY REDEFINED</span>
            <div className="h-px w-12 bg-champagne-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-champagne-400 drop-shadow-lg" />
      </motion.div>
    </section>
  )
}
