import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavHeader = () => {
    return (
         <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
            <NavLink to="/" className="navbar-brand"><img src="images/logo.png" alt="logo" /></NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <NavLink to="/cart" className="nav-link"><FontAwesomeIcon icon="cart-arrow-down" /> <b>Go to Cart</b></NavLink>
                    <NavLink to="/contact" className="nav-link"><FontAwesomeIcon icon="phone" />  <b>Contact</b></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavHeader;