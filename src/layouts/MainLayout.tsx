import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(45,108,223,0.12),_transparent_55%)]">
      <header className="px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white shadow-subtle">
              TB
            </div>
            <div>
              <p className="text-lg font-display font-semibold text-neutral-20">
                TransitBrain AI
              </p>
              <p className="text-sm text-neutral-60">Operational Intelligence Platform</p>
            </div>
          </div>
        </div>
      </header>

      <motion.main
        className="mx-auto flex max-w-5xl flex-1 flex-col px-6 pb-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.main>

      <footer className="mt-auto border-t border-neutral-90/60 bg-white/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-6 text-sm text-neutral-60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} TransitBrain AI. All rights reserved.</span>
          <span>Version 0.0.0 • Build pipeline ready</span>
        </div>
      </footer>
    </div>
  )
}
