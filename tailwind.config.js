module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {
      screens: {
        'custom-breakpoint': '1440px',
        'custom-breakpoint1': '1600px',
        'custom-breakpoint2': '1680px',
        'custom-breakpoint3': '1900px'
      },
      colors: {
        primary:{
          100: '#052049',
          200: '#506380',
          300: '#9BA6B6',
          400: '#E6E9ED',
          500: '#0B2E62'
        },
        secondary:{
          100: '#28DDB2',
          200: '#0F2137',
          300: '#343D48',
          400: '#FFFFFF',
          500: '#F3F4F5'
        }
      }
    },
  },
  plugins: [],
}
