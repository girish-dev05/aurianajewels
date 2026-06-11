'use client'

import { motion } from 'framer-motion'
import { AnimationWrapper } from './animation-wrapper'

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-maroon-800 via-maroon-700 to-maroon-900 text-pearl-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-champagne-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <AnimationWrapper className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
            Ready to Shine?
          </h2>

          <p className="text-lg md:text-xl text-pearl-100 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect jewellery piece that matches your style and celebrates your special moments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(252, 201, 134, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-champagne-400 text-maroon-700 rounded-lg font-serif font-semibold text-lg hover:bg-pearl-50 transition-colors"
            >
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border-2 border-champagne-400 text-pearl-50 rounded-lg font-serif font-semibold text-lg hover:bg-champagne-400/10 transition-colors"
            >
              View Collections
            </motion.button>
          </div>

          <p className="text-sm text-pearl-200 pt-6">
            🎁 First-time customers get 15% off with code: AURIANA15
          </p>
        </AnimationWrapper>
      </div>
    </section>
  )
}
