/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor:"#FF385C",
        primary: "#d0d2d6",
        secondary: "#6A6A6A",
        third: '#DDDDDD',
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      boxShadow: {
        'custom-shadow': '0 3px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.08)',
      },
      // fontFamily: {
      //   custom: ['Roboto','sans-serif'],
      // },
    },

  },
  plugins: [],
}