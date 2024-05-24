import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from "react"
import Footer from "./static/Footer"
import Navbar from "./static/Navbar"
import Productos from "./product/Productos"
import ProductContext from "../../context/ProductContext"



function App() {

  const [data, setData] = useState([])
  const [categoria, setCategoria] = useState()


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(info => setData(info))
  }, [])

  const value = { data, setCategoria, categoria }

  return (
    <>
      <ProductContext.Provider value={value}>
        <Navbar />
        <Productos />
        <Footer />
      </ProductContext.Provider>
    </>
  )
}

export default App
