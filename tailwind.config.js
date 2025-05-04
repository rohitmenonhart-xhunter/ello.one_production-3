/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#050505',
          800: '#0a0a0a',
          700: '#121212',
          600: '#1a1a1a',
          500: '#222222',
          400: '#2a2a2a',
        },
        accent: {
          primary: '#939090',
          secondary: '#616161',
          highlight: '#b3b3b3',
        },
        neon: {
          blue: '#00ff66',
          purple: '#00ff66',
          green: '#00ff66',
        },
      },
      fontFamily: {
        sans: ["'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'beam': 'beam 12s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'flicker': 'flicker 10s linear infinite',
        'grid-fade': 'grid-fade 8s ease-in-out infinite',
        'data-scan': 'data-scan 8s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'rotate-reverse': 'rotate-slow 15s linear infinite reverse',
        'glow-breathe': 'glow-breathe 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'data-stream': 'dataStream 20s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(147, 144, 144, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(147, 144, 144, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '50%': { transform: 'translateY(-8px) rotate(0.5deg) scale(1.01)' },
        },
        beam: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100%) rotate(45deg) translateX(-50%)',
          },
          '50%': {
            opacity: '0.1',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-100%) rotate(45deg) translateX(50%)',
          },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.02' },
          '50%': { opacity: '0.08' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00f2ff' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41.99%': { opacity: '1' },
          '42%': { opacity: '0.8' },
          '43%': { opacity: '1' },
          '60.99%': { opacity: '1' },
          '61%': { opacity: '0.5' },
          '63%': { opacity: '1' },
          '63.99%': { opacity: '1' },
          '64%': { opacity: '0.8' },
          '97%': { opacity: '1' },
          '97.01%': { opacity: '0.4' },
          '97.02%': { opacity: '1' },
        },
        'data-scan': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'glow-breathe': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(0, 242, 255, 0.3), 0 0 15px rgba(0, 242, 255, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(0, 242, 255, 0.5), 0 0 40px rgba(0, 242, 255, 0.2)' 
          },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        slideDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        dataStream: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'radial-fade': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'perspective-grid': 'linear-gradient(to right, rgba(42, 42, 42, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 42, 42, 0.05) 1px, transparent 1px)',
        'data-matrix': 'radial-gradient(circle at 1px 1px, rgba(147, 144, 144, 0.03) 2px, transparent 0)',
      },
    },
  },
  plugins: [],
};
