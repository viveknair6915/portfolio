/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#23272f",      // dark grey background
        secondary: "#d1d5db",   // light grey text
        tertiary: "#373b41",    // medium grey cards/sections
        "black-100": "#2d3136", // slightly lighter dark grey
        "black-200": "#212325", // deep grey for accents
        "white-100": "#f4f4f5", // off-white for highlights
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg.gif')",
      },
    },
  },
  plugins: [],
};
