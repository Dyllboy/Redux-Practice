import React from 'react';
import './main.css';
import  NavBar  from '../Nav/navbar.jsx';
import  ProductComponent  from '../Product/product.jsx';

const MainPage = () => {

    let product = [{name: 'Shirt', price: 20, description: 'A nice shirt'}, {name: 'Pants', price: 30, description: 'A nice pair of pants'}, {name: 'Shoes', price: 40, description: 'A nice pair of shoes'}]

    return (
        <>
            <NavBar />
            <div className='container'>
                <ul>{product.map(p => <ProductComponent key={p.name} product={p}/>)}</ul>
            </div>
        </>
    );
};

export default MainPage;
