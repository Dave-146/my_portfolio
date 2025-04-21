import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['var(--font-comfortaa)'],
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#475569',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'max-width': '100%',
            color: '#334155',
            h1: {
              fontFamily: 'var(--font-comfortaa)',
            },
            h2: {
              fontFamily: 'var(--font-comfortaa)',
            },
            h3: {
              fontFamily: 'var(--font-comfortaa)',
            },
            p: {
              fontFamily: 'var(--font-montserrat)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 