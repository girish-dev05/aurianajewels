'use client'

import { motion } from 'framer-motion'
import { AnimationWrapper } from './animation-wrapper'

export function Wedding() {
  const weddingCollections = [
    {
      title: 'Bridal Collection',
      description: 'Exquisite pieces designed for the most important day of your life',
      image: '/bridal.jpg',
    },
    {
      title: 'Festive Wear',
      description: 'Celebrate every occasion with our vibrant festival jewellery',
      image: '/festive.jpg',
    },
    {
      title: 'Everyday Elegance',
      description: 'Timeless pieces perfect for daily wear and special moments',
      image: '/elegant.jpg',
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-beige-100 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance !text-maroon-700" style={{ color: '#6b2c2c !important' }}>
            Special Collections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Curated for every celebration and cherished moment
          </p>
        </AnimationWrapper>

        {/* Collections grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weddingCollections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-luxury hover:shadow-luxury-lg transition-all duration-300 h-80">
                {/* Image */}
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-pearl-100 text-sm mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 bg-champagne-400 text-maroon-700 rounded-lg font-serif font-semibold hover:bg-pearl-50 transition-colors"
                  >
                    View More
                  </motion.button>
                </div>

                {/* Default overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    {collection.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
