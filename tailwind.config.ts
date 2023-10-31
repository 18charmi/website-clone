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
        'border-color': '#e2e8ff1a',
        'text-color': '#e2e8ff8c',
        'label-color': '#e2e8ffbf'
      },
      
      animation: {
        'gradientBorder': 'rotation 5s linear infinite'
      },

      keyframes: {
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
