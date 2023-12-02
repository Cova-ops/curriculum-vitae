import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

// components
import App from './App.tsx'

// styles
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <HelmetProvider>
    <App />
  </HelmetProvider>
  // </React.StrictMode>,
)
