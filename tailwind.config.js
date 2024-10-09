/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
            "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
            "home-mobile": "url('/assets/home/background-home-mobile.jpg')",

            "destination-desktop":
               "url('/assets/destination/background-destination-desktop.jpg')",
            "destination-tablet":
               "url('/assets/destination/background-destination-tablet.jpg')",
            "destination-mobile":
               "url('/assets/destination/background-destination-mobile.jpg')",

            "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
            "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
            "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",

            "technology-desktop":
               "url('/assets/technology/background-technology-desktop.jpg')",
            "technology-tablet":
               "url('/assets/technology/background-technology-tablet.jpg')",
            "technology-mobile":
               "url('/assets/technology/background-technology-mobile.jpg')",
         },
         colors: {
            white: "#FFFFFF",
            blue: {
               300: "#D0D6F9",
               900: "#0B0D17",
            },
         },
         fontFamily: {
            barlow: ["Barlow Condensed", "sans-serif"],
         },
         fontSize: {
            "desktop-preset-1": "9rem",
            "desktop-preset-2": "6.25rem",
            "desktop-preset-3": "3.5rem",
            "desktop-preset-4": "2rem",
            "desktop-preset-5-6": "1.75rem",
            "desktop-preset-7": "0.875rem",
            "desktop-preset-8": "1rem",
            "desktop-preset-9": "1.125rem",

            "tablet-preset-2": "5rem",
            "tablet-preset-3": "2.5rem",
            "tablet-preset-4": "1.5rem",
            "tablet-preset-5": "1.25rem",
            "tablet-preset-9": "1rem",

            "mobile-preset-1": "5rem",
            "mobile-preset-2": "3.5rem",
            "mobile-preset-3": "2.5rem",
            "mobile-preset-4": "1.125rem",
            "mobile-preset-6": "1rem",
            "mobile-preset-8": "0.875rem",
            "mobile-preset-9": "0.9375rem",
         },
         letterSpacing: {
            "desktop-preset-5": "0.25rem",
            "desktop-preset-7-8": "0.125rem",
         },
         spacing: {
            25: "2px",
            50: "4px",
            100: "8px",
            150: "12px",
            200: "16px",
            300: "24px",
            400: "32px",
            500: "40px",
            600: "48px",
            800: "64px",
            1000: "80px",
            1200: "96px",
            1600: "128px",
         },
         keyframes: {
            openmenu: {
               "0%": { right: "-100%" },
               "100%": { right: "0px" },
            },
            closemenu: {
               "0%": { right: "0px" },
               "100%": { right: "-100%" },
            },
         },
         animation: {
            openmenu: "openmenu 300ms ease-in",
            closemenu: "closemenu 300ms ease-in",
         },
      },
   },
   plugins: [],
};
