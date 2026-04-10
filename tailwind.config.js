/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0CCFF', // Purple from the screenshots
        primaryHover: '#D1B3FF',
        success: '#D9F9E6', // Green from the alerts
        successText: '#10B981',
        googleBorder: '#E5E7EB',
        background: '#F0FDF8', // Light greenish-blue background
      }
    },
  },
  plugins: [],
}
