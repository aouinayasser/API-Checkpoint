import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

function NavBar () {
    return (
    <>
        <Navbar bg="dark" variant="dark" style={{ position:"fixed", width:"100%",zIndex :"1", top:"0" }}>
            <Container>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/userList">Users List</Nav.Link>
            </Nav>
            </Container>
            
        </Navbar>
    </>
    )
}

export default  NavBar