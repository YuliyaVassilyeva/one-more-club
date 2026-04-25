import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#fef3c7",
          mid: "#f59e0b",
          dark: "#92400e",
        },
        accent: "#0f766e",
      },
    },
  },
  plugins: [],
};

export default config;
