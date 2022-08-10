import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


render(
  <React.StrictMode>
    <h1>Todo App</h1>
    <App />
  </React.StrictMode>
  , document.getElementById('root')
)

render(
  <React.StrictMode>
    <BrowserRouter>
      <h1>Todo App</h1>
      <Routes>
        <Route path = "/" element={<App />}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
  , document.getElementById('root')
)