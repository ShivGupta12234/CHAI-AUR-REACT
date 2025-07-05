/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",             // ✅ root HTML
    "./src/**/*.{js,ts,jsx,tsx}" // ✅ all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}