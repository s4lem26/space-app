/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "tech-desktop":'url("../src/assets/technology/background-technology-desktop.jpg")',
        "tech-mobile":'url("../src/assets/technology/background-technology-mobile.jpg")',
        "tech-tablet":'url("../src/assets/technology/background-technology-tablet.jpg")',
        "dest-desktop":'url("../src/assets/destination/background-destination-desktop.jpg")',
        "dest-mobile":'url("../src/assets/destination/background-destination-mobile.jpg")',
        "dest-tablet":'url("../src/assets/destination/background-destination-tablet.jpg")',
        "crew-desktop":'url("../src/assets/crew/background-crew-desktop.jpg")',
        "crew-mobile":'url("../src/assets/crew/background-crew-mobile.jpg")',
        "crew-tablet":'url("../src/assets/crew/background-crew-tablet.jpg")',
        "desktop-image":'url("../src/assets/home/background-home-desktop.jpg")',
        "mobile-image":'url("../src/assets/home/background-home-mobile.jpg")',
        "tablet-image":'url("../src/assets/home/background-home-tablet.jpg")',
      },
      fontFamily:{
        'Bellefair':['Bellefair', "sans-serif"],
        'Barlow': ["Barlow Condensed","sans-serif"],

      },
    },
  },
  plugins: [],
}
