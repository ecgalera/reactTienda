import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Producto({ items }) {


  return (
    <div>
      <Container style={{ width: '50%', display:"flex"}} >
      <Card style={{ width: '18rem', display:"flex", margin:"8px" , border:"3px solid gray", padding:"10px",background:"black"}}>
        <Card.Img variant="top" src={items.image} />
        <Card.Body style={{backgroundColor:"gray"}}>
          <Card.Title>{items.title}</Card.Title>
          <Card.Text>
            Price:${items.price}
          </Card.Text>
          <Link to={`/${items.id}`} style={{color:"black", fontWeight:"bold", textDecoration:"none", marginLeft:"30px"}}>Detalle del Producto</Link>
        </Card.Body>
      </Card>
      </Container>
    </div>
  )
}

export default Producto