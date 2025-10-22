import { motion } from 'framer-motion'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
      className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-90/60 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 px-6 py-4 shadow-subtle backdrop-blur transition duration-300 ease-in-out"
    >
      <h1 className="text-lg font-semibold text-neutral-20 md:text-xl">{title}</h1>
      <motion.span
        role="status"
        aria-live="polite"
        className="rounded-full bg-brand-accent/20 px-3 py-1 text-sm font-medium text-brand-primary"
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        IA Online
      </motion.span>
    </motion.header>
  )
}

