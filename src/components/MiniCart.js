import React, { useEffect, useContext } from 'react';
import CartContext from '../context/cart.provider'

function MiniCart() {

    const { cartQty, getCartQty } = useContext(CartContext)

    useEffect(()=> {
        getCartQty()
    }, []) 


    return (
            <>
                <h3>{cartQty}</h3> 
            </>
    );
}

export default MiniCart;