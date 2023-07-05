import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {}

export const Header = (props: Props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="mb-5">
            <Container>
                <Navbar.Brand href="/">Sua loja</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
                    <Nav className="me-auto">
                        <Link className='nav-link' to="">Produtos</Link>
                        <Link className='nav-link'  to="">Carinho de compras</Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}