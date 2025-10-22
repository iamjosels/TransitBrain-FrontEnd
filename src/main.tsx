import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App'
import { AppProviders } from '@/providers/AppProviders'

import '@/index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found in DOM')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
)

