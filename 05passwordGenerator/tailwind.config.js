// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Enable selection colors
      colors: {
        selection: {
          DEFAULT: '#a0aec0', // Tailwind gray-400
          text: '#ffffff',    // White text on selected background
        }
      }
    },
  },
  plugins: [],
}