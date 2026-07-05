/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0B0B0F',
        deepnavy: '#111827',
        softgold: '#EAB308',
        germany: {
          black: '#000000',
          red: '#DC2626',
          gold: '#FBBF24',
        }
      },
      fontFamily: {
        cinematic: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
        luxury: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'plane-fly': 'planeFly 15s linear infinite',
        'cloud-drift-slow': 'cloudDrift 45s linear infinite',
        'cloud-drift-fast': 'cloudDrift 25s linear infinite',
        'glow-pulse': 'glowPulse 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        planeFly: {
          '0%': { transform: 'translate(-10%, 120%) rotate(-10deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translate(110%, -20%) rotate(-5deg)', opacity: 0 },
        },
        cloudDrift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 10px rgba(234, 179, 8, 0.2), 0 0 20px rgba(234, 179, 8, 0.1)' },
          '100%': { boxShadow: '0 0 25px rgba(234, 179, 8, 0.6), 0 0 40px rgba(234, 179, 8, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
