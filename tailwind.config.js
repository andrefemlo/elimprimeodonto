/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{php,html,js}"],
  theme: {
    fontFamily: {
      sans: [
        'Jost, sans-serif',
      ]
    },
    extend: {
      colors: {
        'off': '#f2efea',
        'off-400': '#eee8e6',
        'acent': '#001A2A',
        'black-800': '#36332E',
        'white': '#FFF',
        'green-whatspp': '#25D366',
      },
      spacing: {
        'screen': '100dvw',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(to right, #191919 0%, #1C1A1D 25%, #211B20 50%, #261C21 75%, #2C1D20 100%)',
      },
      //   'height': 'height .5s ease-in-out',
      // },
      // keyframes: {
      //   wiggle: {
      //     '0%': { 'max-height': '0%' },
      //     '50%': { 'max-height': '50%' },
      //     '100%': { 'max-height': '100%' },
      //   }
      // },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          xl: '1220px',
        }
      }
    }
  }
}

