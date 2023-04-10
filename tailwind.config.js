/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx,mjs}",
    "./src/**/*.{js,jsx,ts,tsx,mjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class"
}
