import React from 'react';
import './cartItem.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart_slice';

const CartItem = ( {product} ) => {

    const dispatch = useDispatch();

    const removeButtonHandler = () => {
        dispatch(cartActions.removeItemFromCart(product));
    }

    return (
        <div className='productCard'>
            <p className='title'> {product.name} </p>
            <p className='price'> ${product.price} </p>
            <p className='quantity'>{product.quantity}</p>
            <button className='removeButton' onClick={removeButtonHandler}> Remove </button>
        </div>
    );
};

export default CartItem;
