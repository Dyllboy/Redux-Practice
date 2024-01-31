import React from 'react';
import './cart.css';
import NavBar from '../Nav/navbar';
import CartItem from './cartItem';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items)

    return (
        <div>
            <NavBar />
            <div className='cartContainer'>
                <ul>{cartItems.map(c => <CartItem key={c.name} product={c}/>)}</ul>
            </div>
        </div>
    );
};

export default Cart;
