import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Cart() {


    useEffect(() => {
    
    }, [])

    return (
            <>
             <h1>Carrinho</h1>
            <Header/>
            <Link to="/">Home</Link>
           
            </>
    );
}

export default Cart;