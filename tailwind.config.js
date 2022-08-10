/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow1: {
          "0%": { transform: "translate(10%, 10%) scale(1)" },
          "25%": { transform: "translate(-10%, 10%) scale(1)" },
          "50%": { transform: "translate(-10%, -10%) scale(1)" },
          "75%": { transform: "translate(10%, -10%) scale(1)" },
          "100%": { transform: "translate(10%, 10%) scale(1)" },
        },
        glow2: {
          "0%": { transform: "translate(-10%, -10%) scale(1)" },
          "25%": { transform: "translate(10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, 10%) scale(1)" },
          "75%": { transform: "translate(-10%, 10%) scale(1)" },
          "100%": { transform: "translate(-10%, -10%) scale(1)" },
        },
        glow3: {
          "0%": { transform: "translate(-10%, 10%) scale(1)" },
          "25%": { transform: "translate(-10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, -10%) scale(1)" },
          "75%": { transform: "translate(10%, 10%) scale(1)" },
          "100%": { transform: "translate(-10%, 10%) scale(1)" },
        },
        glow4: {
          "0%": { transform: "translate(10%, -10%) scale(1)" },
          "25%": { transform: "translate(10%, 10%) scale(1)" },
          "50%": { transform: "translate(-10%, 10%) scale(1)" },
          "75%": { transform: "translate(-10%, -10%) scale(1)" },
          "100%": { transform: "translate(10%, -10%) scale(1)" },
        },
      },
      animation: {
        glow1: "glow1 4s linear infinite",
        glow2: "glow2 4s linear infinite",
        glow3: "glow3 4s linear infinite",
        glow4: "glow4 4s linear infinite",
      },
    },
  },
  plugins: [],
};
