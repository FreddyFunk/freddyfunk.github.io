/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zinc dark theme with Catppuccin Mocha blue accent
        background: "#09090b",  // zinc-950
        surface: "#18181b",     // zinc-900
        "surface-hover": "#27272a", // zinc-800
        "surface-active": "#3f3f46", // zinc-700
        text: "#e4e4e7",        // zinc-200
        blue: {
          DEFAULT: "#89b4fa",   // Catppuccin Mocha blue
          400: "#89b4fa",
          500: "#89b4fa",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
}
