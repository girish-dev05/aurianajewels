'use client'

import { motion } from 'framer-motion'
import { AnimationWrapper } from './animation-wrapper'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    quote: 'Studio Auriana made my wedding day magical with their stunning jewellery collection. Every piece was absolutely perfect!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anjali Gupta',
    role: 'Fashion Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    quote: 'The quality and design of their Moissanite collection is unmatched. I get compliments everywhere I wear them!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Neha Patel',
    role: 'Customer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    quote: 'Exceptional customer service and delivery was incredibly fast. Will definitely order again!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-beige-100 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <AnimationWrapper className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-balance !text-maroon-700" style={{ color: '#6b2c2c !important' }}>
            Love from Our Customers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our happy customers have to say
          </p>
        </AnimationWrapper>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-champagne-400 text-champagne-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-champagne-300"
                />
                <div>
                  <p className="font-serif font-bold text-maroon-700">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
