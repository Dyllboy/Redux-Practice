import React from 'react';
import './navbar.css';

const NavBar = () => {
    return (
        <ul className='nav'>
            <a href='/' className='homeButton'> Home </a>
            <a href='/cart' className='cartButton'> Cart </a>
        </ul>
    );
};

export default NavBar;
