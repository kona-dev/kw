/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0a1930',
        'dark-purple': '#301934',
        'dark-green': '#003b36',
      },
      animation: {
        'gradient-shift': 'gradient-shift 10s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
    },
  },
  plugins: [],
}; 