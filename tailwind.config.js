/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./CustomCard.html"],
  theme: {
    extend: {
      colors: {
        'darkblue': '#010022',
      },
      boxShadow: {
        'pfp': '0 0 20px 0 rgba(0, 0, 0, 50)',

      },
      borderWidth: {
        default: '1px',
      },
      spacing: {
        '16': '4rem',
      }
    },
    
  },
  plugins: [],
}
