import { Container, Nav, Navbar } from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { Badge } from '@mui/material';


export const Header = () => {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="mb-5">
            <Container>
                <Navbar.Brand href="/">Sua loja</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className=''>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/">Produtos</Link>
                        <Link className='nav-link' to="/cart">
                            <Badge badgeContent={1} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}