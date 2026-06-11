'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-maroon-800 text-pearl-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-serif font-bold">Studio Auriana</h3>
            <p className="text-champagne-400 text-sm font-semibold">By Seema Samar</p>
            <p className="text-pearl-100 text-sm leading-relaxed">
              Crafting timeless elegance through exquisite jewellery design and unparalleled craftsmanship.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-serif font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-pearl-100">
              <li>
                <a href="#" className="hover:text-champagne-400 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-serif font-bold">Collections</h4>
            <ul className="space-y-2 text-sm text-pearl-100">
              <li>
                <a href="#" className="hover:text-champagne-400 transition-colors">
                  Kundan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne-400 transition-colors">
                  Polki
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne-400 transition-colors">
                  Moissanite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-champagne-400 transition-colors">
                  Bridal
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-serif font-bold">Contact Us</h4>
            <div className="space-y-3 text-sm text-pearl-100">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-champagne-400 flex-shrink-0 mt-0.5" />
                <a href="tel:9829387473" className="hover:text-champagne-400 transition-colors">9829387473</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-champagne-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:aurianajewels12@gmail.com" className="hover:text-champagne-400 transition-colors">aurianajewels12@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne-400 flex-shrink-0 mt-0.5" />
                <span>India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-pearl-100 text-sm">
            © {currentYear} Seema Samar. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-6">
            {[
              { icon: Instagram, href: '#' },
              { icon: Facebook, href: '#' },
              { icon: Twitter, href: '#' },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, color: '#fcc986' }}
                className="text-pearl-100 hover:text-champagne-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Bottom links */}
          <div className="flex gap-6 text-sm text-pearl-100">
            <a href="/privacy" className="hover:text-champagne-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-champagne-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
