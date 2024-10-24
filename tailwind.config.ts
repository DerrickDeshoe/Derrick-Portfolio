import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    keyframes: {
        distressSignal: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
        },
        growCircle: {
          '0%': { transform: 'scale(0.6)' }, 
          '100%': { transform: 'scale(1.2)' }, 
        },
      },
      animation: {
        distressSignal: 'distressSignal 1.5s infinite ease-in-out',
        growCircle: 'growCircle 1.5s infinite ease-out', 
      },

      backgroundImage: {
        hero: "url('../public/images/herro.svg')",
        about: "url('../public/images/about me/aboutmebackground.svg')",
        work: "url('../public/images/Myworkbackground.svg')",
        contact: "url('../public/images/ContactImage.svg')",
       
      },
      colors: {
        grayishBlack: '#071019',
        gray: '#4E545B',
        red: "#C30004",
        overlay: "#050814",
        lightGray: '#D9D9D9',
        hoverGray: '#ACA5A5',
      },

      fontFamily:{
        port:'poetsen',
        nunito: 'nunito',
        nuniBold: 'nunitoBold',

      }
    },
  },
  plugins: [],
};
export default config;
