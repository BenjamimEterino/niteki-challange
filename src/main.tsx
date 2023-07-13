import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rotas } from './router.tsx';
import { inject } from '@vercel/analytics';
 
inject();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>,
)
