/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Raleway", 'sans-serif'],
        font2: ["Rancho", 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

