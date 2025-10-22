// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Marca
        'brand-primary': '#2563EB', // Azul principal (IA)
        'brand-accent':  '#00E0FF', // Cian acento IA

        // Neutrales (mapa de tokens 20–98)
        'neutral-20': '#1E293B', // Texto principal
        'neutral-60': '#64748B', // Texto secundario
        'neutral-90': '#E5E7EB', // Bordes sutiles/surfaces
        'neutral-95': '#F3F4F6', // Superficie clara
        'neutral-98': '#F9FAFB', // Fondo base de página
      },
      boxShadow: {
        // Sombra suave usada en tarjetas/botones
        subtle: '0 8px 30px 0 rgb(2 6 23 / 0.08)',
      },
      fontFamily: {
        // Fuente de display y sans (usa tu var si la cargas por CSS)
        display: ['DM Sans', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // opcional, por consistencia visual
        lg: '0.75rem',
      },
    },
  },
  plugins: [],
} satisfies Config
