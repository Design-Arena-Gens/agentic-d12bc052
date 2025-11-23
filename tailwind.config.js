/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0ea5e9',
          navy: '#0f172a',
          sky: '#38bdf8',
          green: '#22c55e'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 132, 199, 0.12)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 700ms ease-out both',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
