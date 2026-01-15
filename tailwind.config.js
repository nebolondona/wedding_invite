/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'script': ['Good Vibes Pro', 'cursive'],
        'body': ['Palatino Linotype', 'serif'],
      },
      colors: {
        'wedding-red': '#A90000',
        'wedding-cream': '#F2EFDE',
      },
    },
  },
  plugins: [],
}
