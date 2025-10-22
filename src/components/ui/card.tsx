import * as React from 'react'

import { cn } from '@/utils/cn'

type CardProps = React.HTMLAttributes<HTMLDivElement>
type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>
type CardContentProps = React.HTMLAttributes<HTMLDivElement>
type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('glass-card p-6', className)} {...props} />
  ),
)
Card.displayName = 'Card'

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-1 text-left', className)}
      {...props}
    />
  ),
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold font-display text-neutral-20', className)}
      {...props}
    >
      {children}
    </h3>
  ),
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-neutral-60 leading-relaxed', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-4 flex flex-col gap-4', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'
