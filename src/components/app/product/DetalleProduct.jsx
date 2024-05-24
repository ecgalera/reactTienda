import React, { useState, useEffect } from 'react'
import Footer from "../static/Footer"
import Navbar from "../static/Navbar"
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function DetalleProduct() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(productos => setProducts(productos))
  }, [products])

  const params = useParams()

  console.log(products)

  return (
    <>
      <Navbar />

      {products.filter(e => e.id === +params.id).map(e =>
        <>
        <h3 style={{margin:"30px"}}>Detalle de Producto</h3>
          <Container style={{ width: '50%', display: "flex" }} >
            
            <Card style={{ width: '18rem', display: "flex", margin: "8px", border: "3px solid gray", padding: "10px", background: "black" }}>
              <Card.Img variant="top" src={e.image} />
              <Card.Body style={{ backgroundColor: "gray" }}>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>
                  Price:${e.price}
                </Card.Text>
                <Link to={`/${e.id}`} style={{ color: "black", fontWeight: "bold", textDecoration: "none", marginLeft: "30px" }}>Agregar Al Carrito</Link>
              </Card.Body>
            </Card>
          </Container>
        </>
      )}

      <Footer />
    </>


  )
}

export default DetalleProduct