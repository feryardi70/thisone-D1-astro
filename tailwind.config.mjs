/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode toggle
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.6s ease-out forwards",
      },
      backgroundImage: {
        "mtf-bg": "url('/src/assets/bg-mtf.webp')",
        "es-burned": "url('/src/assets/carousel-1.jpg')",
      },
    },
  },
  plugins: [],
};
