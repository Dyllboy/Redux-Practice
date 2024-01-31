import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className='nav'>
            <Link to='/'>
                <a className='homeButton'> Home </a>
            </Link>
            <Link to='/cart'>
                <a className='cartButton'> Cart </a>
            </Link>
        </ul>
    );
};

export default NavBar;
