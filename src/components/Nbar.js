import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Nbar() {
   
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/signup">Signup</NavLink>
         
            <NavLink to="/login">Login</NavLink>
           
          </Nav>
        </Container>
      </Navbar>
      <br />



    </>
  );
}

export default Nbar;
