/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2a6f77',
          dark: '#1d4e54',
          light: '#e8f2f3',
          gold: '#d99a2b',
        },
      },
      fontFamily: {
        heading: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        body: ['-apple-system', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
