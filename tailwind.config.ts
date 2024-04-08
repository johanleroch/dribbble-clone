import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mona: ["var(--font-mona)"],
      serif: ["var(--font-serif)"],
    },
    extend: {
      colors: {
        custom: {
          black: "var(--color-primary)",
        },
      },
      aspectRatio: {
        card: "273 / 340",
      },
      animation: {
        slide:
          "slide calc(var(--card-number) * var(--card-speed)) linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
