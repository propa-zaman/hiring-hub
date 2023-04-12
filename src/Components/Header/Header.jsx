import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'


const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/"><h2 className='text-info fw-bolder'>HiringHub</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='fw-bold text-black hover' href="/">Home</Nav.Link>
                        <Nav.Link className='fw-bold text-black hover h' href="/statistics">Statistics</Nav.Link>
                        <Nav.Link className='fw-bold text-black hover' href="/appliedjobs">Applied Jobs</Nav.Link>
                        <Nav.Link className='fw-bold text-black hover' href="/blog">Blog</Nav.Link>



                    </Nav>
                    <Button variant="info" className='btn btn-info text-white fw-semibold'>Start Applying</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;