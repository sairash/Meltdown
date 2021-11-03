const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xxs': '300px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        'xxs': '.60rem',
      },
      height: {
        '94': '22rem',
        '110':'30rem',
      },
      width:{
        '8xl': '85rem',
      },
      maxWidth: {
        '8xl': '85rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        meltprimary: {
          light: '#f5bc25',
          DEFAULT: '#f5bc25',
          dark: '#f5bc25',
        },
        meltsecondary: {
          light: '#fff',
          DEFAULT: '#fff',
          dark: '#1a1918',
        },
        meltgray: {
          light: '#1a1918',
          DEFAULT: '#1a1918',
          dark: '#000',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
