/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        12: "3rem",
      },
      fontFamily: {
        Neue_Montreal: ["Neue_Montreal"],
        Founders_Grotesk_X: ["Founders_Grotesk_X-Cond_Bold"],
        Founders_Grotesk_X_light: ["Founders_Grotesk_X"],
      },
    },
  },
  plugins: [],
};
