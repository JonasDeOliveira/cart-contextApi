import React, { useState, createContext } from 'react'

const CartContext = createContext({})

function CartProvider(props) {

    const [cart, setCart] = useState([])
    const [cartQty, setCartQty] = useState(0)

    const getCartStorage = () => {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
        }

        return []
    }

    const addToCart = (item) => {
        let cartList = localStorage.getItem('cart') 
                        ? JSON.parse(localStorage.getItem('cart')) 
                        : []
        item.qty = 2
        cartList.push(item)
        localStorage.setItem("cart", JSON.stringify(cartList))
        localStorage.setItem("qtyCart", JSON.stringify(cartList.length))
        setCart(cartList)
        setCartQty(cartList.length)
    }

    const getCart = () => {
        let cartList = getCartStorage()
        setCart(cartList)

    }

    const getCartQty= () => {
        let cartList = getCartStorage()
        setCartQty(cartList.length)
    }

    return (
        <CartContext.Provider value={{cart, cartQty, addToCart, getCartQty, getCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext