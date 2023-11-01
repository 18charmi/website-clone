import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'background-color': 'var(--background)',
        'border-color': 'var(--border-color)',
        'text-color': '#e2e8ff8c',
        'label-color': '#e2e8ffbf'
      },

      animation: {
        'border-fade-in-out': 'fade-in-out 5s ease-in-out infinite',
        'increase-width': 'increase-width 10s ease-in-out infinite',
        'gradientBorder': 'rotation 5s linear infinite'
      },

      keyframes: {
        'fade-in-out': {
          '0%': { "border-color": 'transparent' },
          '50%': { "border-color": 'var(--border-color)' },
          '100%': { "border-color": 'transparent' },
        },
        'increase-width': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        rotation: {
          '0%': {
            '--gradient-angle': '0deg'
          },
          '100%': {
            '--gradient-angle': '360deg'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
