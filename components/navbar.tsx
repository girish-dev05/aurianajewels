'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Collections', href: '#collections' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <>
      {/* Top info bar */}
      <div className="bg-maroon-700 text-pearl-50 py-3 px-4 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="tel:9829387473" className="flex items-center gap-2 hover:text-champagne-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>9829387473</span>
            </a>
            <a href="mailto:aurianajewels12@gmail.com" className="flex items-center gap-2 hover:text-champagne-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>aurianajewels12@gmail.com</span>
            </a>
          </div>
          <div className="text-center sm:text-right">
            <p className="font-serif font-semibold">Owner: <span className="text-champagne-400">Seema Samar</span></p>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <a href="#" className="group">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-champagne-400 to-maroon-600 flex items-center justify-center">
                    <span className="text-white font-serif font-bold text-lg">✨</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-serif font-bold text-maroon-700 group-hover:text-champagne-500 transition-colors">
                      Studio Auriana
                    </span>
                    <span className="text-xs text-champagne-500 font-semibold tracking-wide">
                      LUXURY JEWELS
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-gray-700 font-serif font-semibold text-sm uppercase tracking-wide hover:text-maroon-700 transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-champagne-400 to-maroon-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              
              {/* Legal Links */}
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <a
                  href="/terms"
                  className="text-gray-600 text-xs font-medium hover:text-maroon-700 transition-colors"
                >
                  Terms
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href="/privacy"
                  className="text-gray-600 text-xs font-medium hover:text-maroon-700 transition-colors"
                >
                  Privacy
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-champagne-400 to-maroon-600 text-white font-serif font-bold text-sm uppercase tracking-wider hover:shadow-lg transition-all duration-300"
            >
              Shop Now
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-maroon-700" />
              ) : (
                <Menu className="w-6 h-6 text-maroon-700" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-3 border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 font-serif font-semibold hover:bg-beige-100 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Legal Links for Mobile */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <a
                  href="/terms"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 text-sm hover:bg-beige-100 rounded-lg transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/privacy"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 text-sm hover:bg-beige-100 rounded-lg transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
              
              <button className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-champagne-400 to-maroon-600 text-white font-serif font-bold uppercase tracking-wider">
                Shop Now
              </button>
            </div>
          </motion.div>
        </div>
      </nav>
    </>
  )
}
