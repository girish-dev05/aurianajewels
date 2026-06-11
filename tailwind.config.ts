import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors mapped to design system
        background: '#faf8f6',
        foreground: '#2c2c2c',
        card: '#ffffff',
        'card-foreground': '#2c2c2c',
        primary: '#6b2c2c',
        'primary-foreground': '#faf8f6',
        secondary: '#f9b870',
        'secondary-foreground': '#2c2c2c',
        accent: '#fcc986',
        'accent-foreground': '#2c2c2c',
        muted: '#e8ddd4',
        'muted-foreground': '#5a5a5a',
        border: '#e5dcd2',
        input: '#f9f5f1',
        ring: '#f9b870',
        // Luxury brand colors
        ivory: {
          50: '#faf8f6',
          100: '#f5f0eb',
          200: '#ede5dd',
          300: '#e5dcd2',
        },
        champagne: {
          50: '#fef9f3',
          100: '#fdf1e3',
          200: '#fde5cd',
          300: '#fdd9b5',
          400: '#fcc986',
          500: '#f9b870',
        },
        maroon: {
          600: '#6b2c2c',
          700: '#5a2323',
          800: '#45191a',
          900: '#3a0f10',
        },
        beige: {
          100: '#f9f5f1',
          200: '#f2ebe3',
          300: '#e8ddd4',
          400: '#ddd0c5',
        },
        pearl: {
          50: '#fefdfb',
          100: '#fffaf5',
          200: '#fef5ed',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(252, 201, 134, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(252, 201, 134, 0.8)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 0, 0, 0.08)',
        'luxury-lg': '0 30px 90px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
