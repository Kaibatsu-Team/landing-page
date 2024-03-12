/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        img: "50px 10px 2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
