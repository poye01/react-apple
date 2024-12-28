import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./Commonresources/Youtube/youtube.css"
import "./components/css/bootstrap.css"
import "./components/css/styles.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
