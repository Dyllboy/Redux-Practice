import React from 'react';
import './cartItem.css';

const CartItem = ( {product} ) => {
    return (
        <div className='productCard'>
            <p className='title'> {product.name} </p>
            <p className='price'> ${product.price} </p>
            <p className='quantity'>0</p>
            <button className='removeButton'> Add to Cart </button>
        </div>
    );
};

export default CartItem;
