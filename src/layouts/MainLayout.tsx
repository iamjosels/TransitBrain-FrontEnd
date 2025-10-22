import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { Header } from '@/components/Header'
import Sidebar from '@/components/Sidebar'

interface MainLayoutProps extends PropsWithChildren {
  title?: string
}

export function MainLayout({ children, title = 'Dashboard' }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-neutral-98 text-neutral-20">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header title={title} />
        <motion.main
          className="flex-1 overflow-y-auto bg-neutral-98 p-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}
