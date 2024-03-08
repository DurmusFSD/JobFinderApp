/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4b4ffc",
        light:"#f5f6fc",
      },
    },
  },
  plugins: [],
}