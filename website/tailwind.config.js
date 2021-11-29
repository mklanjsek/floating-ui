// eslint-disable-next-line
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#BFC3D9',
            blockquote: {
              color: '#BFC3D9',
            },
            strong: {
              color: '#fff',
            },
            pre: {
              color: '#cddbf7',
            },
            h1: {
              backgroundClip: 'text',
              color: 'transparent',
              backgroundImage: `linear-gradient(to right, ${colors.yellow['300']}, ${colors.pink['400']})`,
              lineHeight: '1.5 !important',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#BFC3D9',
            },
            'h2 a': {
              color: 'inherit',
            },
            'h3 a': {
              color: 'inherit',
            },
            code: {
              color: colors.pink[300],
              borderRadius: '4px',
              padding: '2px 4px',
              '&::before': {
                display: 'none',
              },
              '&::after': {
                display: 'none',
              },
            },
            a: {
              color: '#87e1fc',
              fontSize: '',
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              '&:hover': {
                borderBottomColor: 'inherit',
              },
              '&:active': {
                borderBottomStyle: 'dashed',
              },
            },
            'a code': {
              color: '#fff',
            },
            'blockquote p:first-of-type::before': {
              display: 'none',
            },
          },
        },
      },
      colors: {
        gray: {
          1000: '#1c1d24',
          900: '#1F2028',
          800: '#272935',
          700: '#353849',
          600: '#575969',

          200: '#BFC3D9',
          100: '#dcdfec',
          50: '#FFF',
        },
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle at 50% 10%, var(--tw-gradient-stops))',
      },
      inset: {
        '-32': '-128px',
      },
      width: {
        '1200px': '1200px',
      },
      lineHeight: {
        'gradient-heading': '1.1 !important',
      },
    },
  },
  variants: {
    extend: {
      filter: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};