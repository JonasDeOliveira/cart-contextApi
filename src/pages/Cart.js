import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CartContext from '../context/cart.provider'
import ProductList from '../components/ProductList'

function Cart() {

    const { cart, getCart } = useContext(CartContext)

    useEffect(() => {
        getCart()
    }, [])

    return (
            <>
             <h1>Carrinho</h1>
            <Header/>
            <Link to="/">Home</Link>
            <ProductList products={cart} cart/>
           
            </>
    );
}

export default Cart;