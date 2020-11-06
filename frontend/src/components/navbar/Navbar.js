import React, { useState } from 'react'
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container} from 'reactstrap'

function MyNavbar() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
      <>
        <Navbar color="dark" dark expand="md" fixed="top" style={{opacity: 0.9}}>
            <Container fluid={true}>
                <NavbarBrand href="/">Physiotherapy Exercises</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
      </>
    )
}

export default MyNavbar