/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'brand-red': '#E51D1D',
        'brand-red-hover': '#B31212',
        'dark-bg': '#0a0a0a',
        'dark-card': '#141414',
        'dark-border': '#262626',
      }
    }
  },
  plugins: [],
}
