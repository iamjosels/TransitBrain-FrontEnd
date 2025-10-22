import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, MapPinned, PanelsTopLeft, Route as RouteIcon } from 'lucide-react'

import NavItem from './NavItem'

const NAV = [
  { key: 'map', label: 'Mapa', icon: MapPinned },
  { key: 'routes', label: 'Rutas', icon: RouteIcon },
  { key: 'panel', label: 'Panel', icon: PanelsTopLeft },
  { key: 'alerts', label: 'Alertas', icon: Bell },
]

export default function Sidebar() {
  const [active, setActive] = useState<string>('map')
  const collapsed = true

  return (
    <motion.aside
      initial={{ x: -48, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex h-screen w-16 flex-col border-r border-neutral-90 bg-white/70 p-3 shadow-subtle backdrop-blur-md md:w-64"
      aria-label="Navegación principal"
    >
      <div className="mb-4 flex items-center gap-2 px-2">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent shadow-subtle" />
        <div className="hidden md:block">
          <div className="text-sm font-display font-semibold leading-tight">TransitBrain</div>
          <div className="text-xs text-neutral-60 -mt-0.5">AI</div>
        </div>
      </div>

      <nav className="space-y-1">
        {NAV.map((item) => (
          <NavItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            active={active === item.key}
            collapsed={collapsed}
            onClick={() => setActive(item.key)}
          />
        ))}
      </nav>
    </motion.aside>
  )
}

