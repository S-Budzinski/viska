/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#0A122A',
        lightblue: '#3b82f6',
        red: '#ef4444',
        green: '#22c55e',
        // Add other colors as needed
      },
      fontSize: {
        '6xl': '4rem',
        // Add other font sizes as needed
      },
    },
  },
  plugins: [
    
  ],
}
