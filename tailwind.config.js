/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        seashell: "#fffaf5",
        black: "#000",
        royalblue: "#457eff",
        darkslategray: "#303030",
        salmon: '#FF7878',
      },
      dropShadow: {
        'xl': '1.5rem 1.5rem 0rem #457eff',
      },
      fontFamily: {
        changa: "Changa",
        "covered-by-your-grace": "'Covered By Your Grace'",
      },
    },
    fontSize: {
      "29xl": "48px",
    },
  },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
  };
