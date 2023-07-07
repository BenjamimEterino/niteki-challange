import { Container, Nav, Navbar } from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="mb-5">
            <Container>
                <Navbar.Brand href="/">Sua loja</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Produtos</Link>
                        <Link className='nav-link'  to="/cart"> <ShoppingCartIcon /></Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}