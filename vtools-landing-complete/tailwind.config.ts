import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { navy: "#0B1F3B" },
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: { xl: "14px" },
      boxShadow: { subtle: "0 2px 12px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
};

export default config;
