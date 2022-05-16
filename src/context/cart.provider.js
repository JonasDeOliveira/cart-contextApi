import React, { useState, createContext } from 'react'

const CartContext = createContext({})

function CartProvider(props) {

    const [cart, setCart] = useState([])
    const [cartQty, setCartQty] = useState(0)

    const addToCart = (item) => {
        let cartList = localStorage.getItem('cart') 
                        ? JSON.parse(localStorage.getItem('cart')) 
                        : []
        cartList.push(item)
        localStorage.setItem("cart", JSON.stringify(cartList))
        setCart(cartList)
        setCartQty(cartList.length)
    }

    return (
        <CartContext.Provider value={{cartQty, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext