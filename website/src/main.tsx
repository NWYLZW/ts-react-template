import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { ContextsProvider } from './contexts'

createRoot(document.getElementById('app')!)
  .render(<StrictMode>
    <ContextsProvider>
      <App />
    </ContextsProvider>
  </StrictMode>)
