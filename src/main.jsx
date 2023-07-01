import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header.jsx'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
