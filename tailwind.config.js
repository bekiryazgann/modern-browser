/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tool-bar-item": "#7C7D7D",
        "search-bar-bg": "#D6D7DA"
      }
    },
  },
  plugins: [],
};
