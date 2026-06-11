'use client'

import { motion } from 'framer-motion'
import { AnimationWrapper } from './animation-wrapper'
import { Sparkles, Crown, Gem } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: 'Kundan',
    description: 'Traditional hand-crafted jewellery with intricate gemstone inlay work',
    icon: Crown,
    image: '/kundan.jpg',
  },
  {
    id: 2,
    name: 'Polki',
    description: 'Uncut diamond jewellery with authentic royal charm and elegance',
    icon: Gem,
    image: '/polki.jpg',
  },
  {
    id: 3,
    name: 'Moissanite',
    description: 'Brilliant lab-created stones with diamond-like sparkle and durability',
    icon: Sparkles,
    image: '/moissanite.jpg',
  },
]

export function Categories() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-beige-100">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance" style={{ color: '#6b2c2c' }}>
            Our Collections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each piece tells a story of craftsmanship and elegance
          </p>
        </AnimationWrapper>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-beige-200">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-champagne-400" />
                      <h3 className="text-2xl font-serif font-bold text-maroon-700">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {category.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-champagne-500 font-serif text-sm font-semibold hover:text-maroon-700 transition-colors duration-300 flex items-center gap-2"
                    >
                      Explore →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
