import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar data-bs-theme="dark" style={{border:"2px solid black", background:"gray"}}>
        <Container>
          <Navbar.Brand style={{fontWeight:"bolder", color:"white"}}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" style={({isActive})=>{return {marginRight:"8px", fontWeight:"bold" , textDecoration:"none", color: isActive ? "black":"white"}}}>Productos</NavLink>
            <NavLink to={"/register"} style={({isActive})=>{return {marginRight:"8px" ,fontWeight:"bold", textDecoration:"none", color: isActive ? "black":"white"}}}>Registro</NavLink>
            <NavLink to="/admin" style={({isActive})=>{return {marginRight:"8px" ,fontWeight:"bold", textDecoration:"none", color: isActive ? "black":"white"}}}>Administración</NavLink>
            <NavLink to="/carrito" style={({isActive})=>{return {marginRight:"8px" , fontWeight:"bold",textDecoration:"none", color: isActive ? "black":"white"}}}>Carrito</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;