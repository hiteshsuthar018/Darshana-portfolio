import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAFC",
        "canvas-alt": "#F4F2FB",
        ink: "#14121A",
        muted: "#6E6B7A",
        line: "#EAE7F3",
        surface: "#FFFFFF",
        violet: {
          DEFAULT: "#7C5CFC",
          soft: "#EFEBFF",
        },
        indigo: {
          DEFAULT: "#4C6FFF",
        },
        coral: {
          DEFAULT: "#FF7A59",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "canvas-gradient":
          "linear-gradient(135deg, #7C5CFC 0%, #4C6FFF 100%)",
        "canvas-gradient-soft":
          "linear-gradient(135deg, rgba(124,92,252,0.14) 0%, rgba(76,111,255,0.10) 100%)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 40%, rgba(124,92,252,0.16) 0%, rgba(124,92,252,0) 70%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,18,26,0.04), 0 12px 32px -12px rgba(20,18,26,0.10)",
        "card-hover": "0 1px 2px rgba(20,18,26,0.06), 0 24px 48px -16px rgba(124,92,252,0.28)",
        glow: "0 0 0 1px rgba(124,92,252,0.16), 0 8px 24px rgba(124,92,252,0.20)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--tilt, 0deg))" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
