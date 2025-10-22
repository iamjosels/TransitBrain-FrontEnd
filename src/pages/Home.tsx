import { motion } from 'framer-motion'

export function HomePage() {
  return (
    <motion.section
      className="flex h-full flex-col items-center justify-center text-center"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="mb-2 text-4xl font-display font-bold text-neutral-20 md:text-5xl">
        Bienvenido a TransitBrain AI
      </h2>
      <p className="text-lg text-neutral-60 md:text-xl">
        Explora rutas inteligentes impulsadas por IA 🚀
      </p>
    </motion.section>
  )
}

