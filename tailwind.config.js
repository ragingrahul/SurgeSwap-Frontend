/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surge-beige": "#f5f5dc", // Light beige color
        "surge-teal": "#27B1A9",
        "surge-electric-blue": "#0AEFFF",
        "surge-deep-green": "#164734",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
        holographicShimmer: "holographicShimmer 6s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "spark-vertical": "spark-vertical 2s ease-in-out infinite",
        "spark-horizontal": "spark-horizontal 2s ease-in-out infinite",
        "scale-pulse": "scale-pulse 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        "slow-spin": "slow-spin 20s linear infinite",
        "reverse-slow-spin": "reverse-slow-spin 25s linear infinite",
        "float-up": "float-up 3s ease-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        holographicShimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8, filter: "brightness(1.2)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: 0.8 },
          "50%": { opacity: 1 },
        },
        "spark-vertical": {
          "0%": { height: "0%", opacity: 0.3 },
          "50%": { height: "70%", opacity: 0.7 },
          "100%": { height: "0%", opacity: 0.3 },
        },
        "spark-horizontal": {
          "0%": { width: "0%", opacity: 0.3 },
          "50%": { width: "70%", opacity: 0.7 },
          "100%": { width: "0%", opacity: 0.3 },
        },
        "scale-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: 0.6,
            boxShadow: "0 0 20px 0px rgba(14, 165, 233, 0.3)",
          },
          "50%": {
            opacity: 1,
            boxShadow: "0 0 40px 10px rgba(14, 165, 233, 0.6)",
          },
        },
        pulse: {
          "0%, 100%": { opacity: 0.4, transform: "scaleX(1)" },
          "50%": { opacity: 0.7, transform: "scaleX(1.1)" },
        },
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "reverse-slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "float-up": {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "50%": { opacity: 0.6 },
          "100%": { transform: "translateY(-20px)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
