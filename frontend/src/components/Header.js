import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Header = ({ title }) => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    )
}