import { motion } from 'framer-motion'
import type { ComponentType } from 'react'

import { cn } from '../utils/cn'

type Props = {
  icon: ComponentType<{ className?: string }>
  label: string
  active?: boolean
  collapsed?: boolean
  onClick?: () => void
}

export default function NavItem({
  icon: Icon,
  label,
  active = false,
  collapsed = false,
  onClick,
}: Props) {
  const title = collapsed ? label : undefined

  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      title={title}
      className={cn(
        'group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 transition-all duration-200',
        'text-neutral-20 hover:text-brand-primary',
        active
          ? 'bg-brand-primary/10 ring-1 ring-brand-primary/20'
          : 'hover:bg-neutral-95',
      )}
    >
      <Icon className={cn('h-5 w-5 shrink-0', active && 'text-brand-primary')} />
      <span
        className={cn(
          'text-sm font-medium truncate',
          collapsed ? 'hidden md:inline' : undefined,
        )}
      >
        {label}
      </span>

      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-brand-accent"
        />
      )}
    </button>
  )
}

