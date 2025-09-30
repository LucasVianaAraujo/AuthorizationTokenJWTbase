import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import Navigation from './route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
  </StrictMode>,
)
