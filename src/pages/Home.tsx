import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-4"
      >
        <span className="text-2xl font-medium text-brand-primary">
          🚀 TransitBrain AI Frontend Initialized Successfully
        </span>
        <p className="max-w-2xl text-base text-neutral-60">
          Tu base tecnológica para visualizaciones urbanas inteligentes ya está lista.
          Configuramos React 19, Tailwind CSS v4, shadcn/ui y un pipeline moderno para
          que puedas enfocarte en construir experiencias de movilidad de primer nivel.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button className="px-6">
            Explorar componentes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="secondary" className="px-6">
            Documentación técnica
          </Button>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.title} className="max-w-80 text-left">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>{card.content}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const cards = [
  {
    title: 'Data Ready',
    description:
      'TanStack Query y Axios con interceptores Problem+JSON para manejar datos en tiempo real.',
    content: (
      <ul className="list-disc pl-5 text-sm text-neutral-60">
        <li>Retry inteligente ante fallos temporales.</li>
        <li>Normalización de errores OIDC y backend.</li>
        <li>Cacheo automático con invalidación granular.</li>
      </ul>
    ),
  },
  {
    title: 'UI Consistente',
    description:
      'Sistema de diseño 2025 con Tailwind CSS v4, tokens de marca y componentes shadcn/ui.',
    content: (
      <ul className="list-disc pl-5 text-sm text-neutral-60">
        <li>Theme tokens listos para modo claro/oscuro.</li>
        <li>Base de componentes reutilizables.</li>
        <li>Animaciones suaves con Framer Motion.</li>
      </ul>
    ),
  },
  {
    title: 'Escalabilidad',
    description:
      'Arquitectura modular con rutas claras y servicios base lista para MapLibre GL JS.',
    content: (
      <ul className="list-disc pl-5 text-sm text-neutral-60">
        <li>Separación de dominios por feature.</li>
        <li>Store centralizado para clientes y cachés.</li>
        <li>Tipado fuerte con TypeScript 5.9.</li>
      </ul>
    ),
  },
]
