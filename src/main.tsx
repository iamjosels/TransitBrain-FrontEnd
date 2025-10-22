import React from 'react'
import ReactDOM from 'react-dom/client'

import { MainLayout } from '@/layouts/MainLayout'
import { AppProviders } from '@/providers/AppProviders'
import { HomePage } from '@/pages/Home'

import '@/index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found in DOM')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppProviders>
      <MainLayout title="Dashboard">
        <HomePage />
      </MainLayout>
    </AppProviders>
  </React.StrictMode>,
)
