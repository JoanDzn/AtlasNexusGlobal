/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2B6BF3',      // Azul corporativo logo
          primaryHover: '#1A53C5', // Azul corporativo oscuro para hover
          secondary: '#1D3D84',    // Azul marino títulos diapositiva
          accent: '#60A5FA',       // Azul claro
          light: '#F8FAFC',        // Fondo claro pizarra
          lightBlue: '#F0F6FF',    // Fondo azul claro complementario
          dark: '#0F172A',         // Slate 900
          gray: '#475569'          // Slate 600
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0.5deg)' },
          '50%': { transform: 'translateY(8px) rotate(-0.5deg)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgba(43, 107, 243, 0.15), 0 0 10px rgba(43, 107, 243, 0.1)' },
          '100%': { 'box-shadow': '0 0 20px rgba(43, 107, 243, 0.4), 0 0 30px rgba(43, 107, 243, 0.2)' }
        }
      }
    }
  },
  plugins: [],
}
