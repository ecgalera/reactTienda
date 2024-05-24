import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import Admin from "./components/admin/Admin"
import Registro from "./components/admin/Registro"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetalleProduct from "./components/app/product/DetalleProduct"
import Login from "./components/admin/Login"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path="/register" element={<Registro />}>
          <Route path=":email" element={<Login/>}/>
          </Route>
        <Route path="/" element={<App/>}/>
        <Route path='/:id' element={<DetalleProduct/>}/>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
) 
