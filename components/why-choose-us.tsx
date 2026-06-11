'use client'

import { motion } from 'framer-motion'
import { AnimationWrapper } from './animation-wrapper'
import { Check, Sparkles, Shield, Truck } from 'lucide-react'

const reasons = [
  {
    id: 1,
    icon: Check,
    title: 'Premium Quality',
    description: 'Finest materials and impeccable craftsmanship in every piece',
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Unique Designs',
    description: 'Exclusive collections created by renowned jewellery designers',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Certified Authentic',
    description: 'All pieces come with authenticity certificates and warranties',
  },
  {
    id: 4,
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Secure packaging and express delivery across the country',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance" style={{ color: '#6b2c2c' }}>
            Why Choose Studio Auriana
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Excellence in every detail, from design to delivery
          </p>
        </AnimationWrapper>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (index % 2) * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-gradient-to-br from-pearl-100 to-beige-100 rounded-xl border border-beige-200 hover:border-champagne-400 transition-all duration-300 hover:shadow-luxury"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block p-3 bg-champagne-400/20 rounded-lg mb-4"
                >
                  <Icon className="w-6 h-6 text-champagne-500" />
                </motion.div>

                <h3 className="text-xl font-serif font-bold text-maroon-700 mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <AnimationWrapper
          type="slideUp"
          delay={0.6}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied customers who trust Studio Auriana
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-maroon-700 text-pearl-50 rounded-lg hover:bg-maroon-800 transition-all duration-300 text-lg font-serif shadow-luxury hover:shadow-luxury-lg"
          >
            Start Shopping
          </motion.button>
        </AnimationWrapper>
      </div>
    </section>
  )
}
