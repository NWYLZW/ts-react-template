import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    conditions: ['browser', 'module', 'import', 'default']
  },
  plugins: [
    react()
  ]
})
