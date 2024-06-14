/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#004a77ff',
      },
    },

  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}

