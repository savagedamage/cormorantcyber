import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: './' -> works both at the custom-domain root (cormorantcyber.com)
// and under the project path (savagedamage.github.io/cormorantcyber/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
