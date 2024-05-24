import React, { useContext } from 'react'
import Producto from './Producto'
import ProductContext from '../../../context/ProductContext'
import { Button } from 'react-bootstrap'


function ListaProductos() {

  const { data, setCategoria, categoria } = useContext(ProductContext)


  return (

    <>

      <h3 style={{ margin: "30px" }}>Productos</h3>
      <Button variant="dark" style={{ margin: "30px", textDecoration: "none", fontWeight: "bold" }} onClick={() => setCategoria("")}>Informática</Button>
      <div style={{ margin: "30px" }}>
        <h4>Productos por Categoría </h4>
        <Button variant="dark" style={{ margin: "5px", textDecoration: "none", fontWeight: "bold" }} onClick={() => setCategoria("electronics")}>Informática</Button>
        <Button variant="dark" style={{ margin: "5px", textDecoration: "none", fontWeight: "bold" }} onClick={() => setCategoria("jewelery")}>Joyería</Button>
        <Button variant="dark" style={{ margin: "5px", textDecoration: "none", fontWeight: "bold" }} onClick={() => setCategoria("men's clothing")}>Vestimenta</Button>
      </div>


      {

        !categoria ? data.map(items => <Producto items={items} key={items.id}/>) : data.filter(e => e.category === categoria).map(items => <Producto items={items} key={items.id} />)

      }

      
      
    </>

  )
}

export default ListaProductos