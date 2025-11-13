module.exports = {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cores semânticas para barbearia
        primary: {
          DEFAULT: '#2D1B12', // marrom escuro
          light: '#4B2E1A',
          dark: '#1B100A',
        },
        secondary: {
          DEFAULT: '#000000', // preto
          light: '#222222',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#C9A94B', // dourado
          light: '#F5E6B2',
          dark: '#A88C2B',
        },
        background: {
          DEFAULT: '#FFFFFF', // branco
          light: '#F7F7F7',
          dark: '#E5E5E5',
        },
        surface: {
          DEFAULT: '#F3EDE7', // bege claro para superfícies
          light: '#F8F5F2',
          dark: '#E2D6CB',
        },
        text: {
          DEFAULT: '#2D1B12', // texto principal marrom escuro
          light: '#4B2E1A',
          dark: '#000000',
        },
        muted: {
          DEFAULT: '#A89F94', // marrom acinzentado para textos secundários
        },
        border: {
          DEFAULT: '#C9A94B', // dourado para bordas
        },
      },
    },
  },
  plugins: [],
};
