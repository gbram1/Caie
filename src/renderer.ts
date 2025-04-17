// src/renderer.ts
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css'

// Create root element if it doesn't exist
const rootElement = document.getElementById('root') || document.body

// Create React root
const root = createRoot(rootElement)

// Render the App component
root.render(React.createElement(App))
