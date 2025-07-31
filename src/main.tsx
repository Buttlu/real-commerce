import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/GlobalColors.css'
import './index.css'
import App from './App.tsx'
import ImageRoller from './ImageRoller/Roller.tsx'
import CardPage from './CardTesting/CardTesting.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<ImageRoller />} />
        <Route path="/card-testing" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
