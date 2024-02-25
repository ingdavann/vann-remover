/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html",],  
  theme: {
    extend: {},
    colors:{
      'primary-color' : '#FFA31B',
      'variant-primary-color' : '#C37500',
      'secondary-color' : '#001524',
      'variant-secondary-color': '#353535',
      'accent-color' : '#A2E2E8',
      'on-bg-color' : '#F5F5F5',
      'on-primary-color' : '#FFFFFF'
    },
    fontFamily:{
      'roboto': ['"Roboto", sans-serif'],
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontSize: {
      body: '16px',
      mainBody: '24px',
      nav: '16px',
      button: '16px',
      h3: '34px',
      h2: '48px',
      h1: '64px',
    },
  },
  plugins: [],
}