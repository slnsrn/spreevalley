module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        black:'#011928',
        'light-bg':'#A1D2FF',
        pink:'#FF4365'
      },
      fontFamily:{
      'body': ['Monteserat','ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', ],
      'hero': ['Lexend Deca', ]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
