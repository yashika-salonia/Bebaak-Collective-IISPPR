/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#23314A", 
          light: "#33425D",   
          dark: "#1A2232",   
        },
        secondary: {
          DEFAULT: "#4A5A6A", 
          light: "#627384",   
          dark: "#36424E",    
        },
        accent: {
          DEFAULT: "#8B5E3C", 
          light: "#A37351",   
          dark: "#704A2E",    
        },
        overlay: {
          dark: "rgba(35, 49, 74, 0.8)",  
          light: "rgba(74, 90, 106, 0.2)", 
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
