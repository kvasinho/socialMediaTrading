import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavItem,NavDropdown,MenuItem } from 'react-bootstrap';


export default function Navigation(){
    return(
        <>  
      <Navbar collapseOnSelect expand="sm" bg="light" variant="light">  
        <Container>  
          <Navbar.Brand href="#home"><img src="/logo.png" width={50}/></Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">   
            </Nav>  
            <Nav>  
              <Nav.Link href="#projects">Projects</Nav.Link>  
              <Nav.Link href="#projects">Dashboard</Nav.Link>  
              <Nav.Link href="#projects">Trades</Nav.Link>  

            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>  
    
    )
}