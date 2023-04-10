import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/blog">Blog</Link> 
        </nav>
        </div>
    );
};

export default Header;