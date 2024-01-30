import React from 'react';
import './cart.css';
import NavBar from '../Nav/navbar';
import CartItem from './cartItem';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items)
    console.log(cartItems)

    // let cartItems = [{name: 'Shirt', price: 20}, {name: 'Pants', price: 30}, {name: 'Shoes', price: 40}]

    return (
        <div>
            <NavBar />
            <div className='cartContainer'>
                <ul>{cartItems.map(c => <CartItem key={c.name} product={c}></CartItem>)}</ul>
            </div>
        </div>
    );
};

export default Cart;
