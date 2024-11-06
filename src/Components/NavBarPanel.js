import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const cartProducts = useSelector(state => state.cart);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Redux ToolKit</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    <Nav>
                        <Nav.Link as={NavLink} to="/">Products</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/cart">My Bag {cartProducts.length} </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
