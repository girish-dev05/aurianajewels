'use client'

import { motion } from 'framer-motion'
import { AnimationWrapper } from './animation-wrapper'

export function About() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <AnimationWrapper type="slideInLeft" className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-champagne-300 to-maroon-600 rounded-lg opacity-20 blur-xl" />
              <img
                src="/about-brand.jpg"
                alt="Studio Auriana"
                className="relative w-full rounded-lg shadow-luxury object-cover aspect-square"
              />
            </div>
          </AnimationWrapper>

          {/* Content side */}
          <AnimationWrapper type="slideInRight" className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance" style={{ color: '#6b2c2c' }}>
                About Studio Auriana
              </h2>
              <div className="w-12 h-1 bg-champagne-400 mb-8" />
            </div>

            <div className="mb-4">
              <p className="text-champagne-500 font-serif text-lg font-semibold mb-2">Founder: Seema Samar</p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in 2015, Studio Auriana has been the epitome of luxury artificial jewellery design. Our artisans blend traditional craftsmanship with contemporary aesthetics to create pieces that celebrate your most precious moments.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Every piece in our collection is handcrafted with meticulous attention to detail, using only the finest materials. We believe in creating jewellery that doesn't just look beautiful, but tells your unique story.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-beige-100 rounded-lg border border-beige-200"
              >
                <p className="text-3xl font-serif font-bold text-maroon-700 mb-2">1000+</p>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-beige-100 rounded-lg border border-beige-200"
              >
                <p className="text-3xl font-serif font-bold text-maroon-700 mb-2">8+</p>
                <p className="text-gray-600 text-sm">Years of Excellence</p>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}
