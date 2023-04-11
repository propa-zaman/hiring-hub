import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"><h2 className='text-info'>HiringHub</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/statistics">Statistics</Nav.Link>
                        <Nav.Link href="/appliedjobs">Applied Jobs</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>



                    </Nav>
                    <Button variant="info">Start Applying</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;