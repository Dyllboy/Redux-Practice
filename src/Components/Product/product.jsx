import React from 'react';
import './product.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart_slice';

const ProductComponent = ({ product }) => {

    const dispatch = useDispatch();

    const addItemHandler = () => {
        console.log(product)
        dispatch(cartActions.addItemToCart(product))
    }

    return (
        <div className='productCard'>
            <p className='title'> {product.name} </p>
            <p className='price'> ${product.price} </p>
            <p className='description'> {product.description} </p>
            <button className='addButton' onClick={addItemHandler}> Add to Cart </button>
        </div>
    );
};

export default ProductComponent;
