/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      thisFont: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "text-light": "#040316",
        "back-light": "#ffffff",
        "primary-light": "#2A3D65",
        "secondary-light": "#9F9DD0",
        "accent-light": "#d08362",
      },
    },
    plugins: [], // Add the missing plugins property here
  },
});
