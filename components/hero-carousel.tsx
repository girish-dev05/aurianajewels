'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const slides = [
    {
      id: 1,
      image: '/hero-bg-1.jpg',
      title: 'Studio Auriana',
      subtitle: 'Exquisite White Diamond Jewelry for Every Precious Moment',
    },
    {
      id: 2,
      image: '/hero-bg-2.jpg',
      title: 'Studio Auriana',
      subtitle: 'Lustrous Pearl Jewelry - Timeless Elegance',
    },
    {
      id: 3,
      image: '/hero-bg-3.jpg',
      title: 'Studio Auriana',
      subtitle: 'Brilliant White Gold & Diamond Collection',
    },
    {
      id: 4,
      image: '/hero-bg-4.jpg',
      title: 'Studio Auriana',
      subtitle: 'Stunning White Platinum Jewelry for Your Special Day',
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

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
      {/* Image Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Elegant overlay gradient - stronger for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Premium glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/30 to-transparent" />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)'
        }} />
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
            <Sparkles className="w-5 h-5" style={{ color: '#fcc986' }} />
            <span className="font-serif text-lg tracking-widest uppercase drop-shadow-lg" style={{ color: '#fcc986', textShadow: '0 3px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
              By Seema Samar
            </span>
            <Sparkles className="w-5 h-5" style={{ color: '#fcc986' }} />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 text-balance"
            style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)' }}
          >
            {slides[currentSlide].title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={textVariants}
            className="text-xl sm:text-2xl text-white mb-8 max-w-2xl text-balance font-semibold"
            style={{ textShadow: '0 3px 12px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)' }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            variants={textVariants}
            className="text-lg mb-12 max-w-xl leading-relaxed font-medium"
            style={{ color: '#ffffff', textShadow: '0 4px 12px rgba(0,0,0,0.7), 0 2px 4px rgba(0,0,0,0.5)' }}
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
            <button className="px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl font-serif font-bold" style={{ backgroundColor: '#fcc986', color: '#6b2c2c' }}>
              Explore Collections
            </button>
            <button className="px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl font-serif font-bold" style={{ backgroundColor: '#ffffff', color: '#6b2c2c', border: '2px solid #ffffff' }}>
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

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-champagne-400 w-8' : 'bg-white/40 w-2 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
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
