/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    'node_modules/@radix-ui/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    // fontFamily: {
    //   primary: "var(--font-ubuntu)",
    // },
    // fontFamily: {
    //   primary: "var(--font-poppins)",
    // },
    extend: {
      colors: {
        primary: "#3e4e50",
        accent: {
          DEFAULT: "#ffbb00",
          hover: "#d99a00",
        },
        secondary: "#2d3a3b",
        earthy: "#a2c3a4",
        warm: "#ffe4c1",
        // colors: {
        //   primary: '#212121', // Neutral Black for a clean base
        //   accent: {
        //     DEFAULT: '#00ffff', // Neon Cyan for accents
        //     hover: '#00e5e5', // Slightly dimmed Cyan for hover
        //   },
        // colors: {
        //   primary: '#2b2e4a', // Rich Indigo for backgrounds
        //   accent: {
        //     DEFAULT: '#ff7e67', // Warm Tangerine
        //     hover: '#ff6347', // Coral for hover
        //   },
        // colors: {
        //   primary: '#1a202c', // Charcoal for backgrounds
        //   accent: {
        //     DEFAULT: '#4caf50', // Green for vibrant accents
        //     hover: '#43a047', // Slightly darker Green for hover
        //   },
        // colors: {
        //   primary: '#0a1128', // Deep Blue for backgrounds
        //   accent: {
        //     DEFAULT: '#ff6b6b', // Vibrant Coral
        //     hover: '#ff4e4e', // Slightly darker Coral for hover
        //   },
        // colors: {
        //   primary: '#1c1c22',
        //   accent: {
        //     DEFAULT: '#00ff99',
        //     hover: '#00e187',
        //   }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
