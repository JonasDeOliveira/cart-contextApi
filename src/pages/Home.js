import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios'
import ProductList from '../components/ProductList'

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get('http://localhost:8080/produtos').then((response) => {
            setProducts(response.data)
        })
    }


    return (
            <>
            <h1>Home</h1>
            <Header/>
            <Link to="cart">Ver carrinho</Link>
            <ProductList products={products}/>
            
            </>
    );
}

export default Home;