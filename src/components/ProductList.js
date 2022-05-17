import React, { useContext } from 'react';
import CartContext from '../context/cart.provider'

function ProductList(props) {

    const { addToCart } = useContext(CartContext)
    const products = props.products || []

    const listProducts = () => {
        return (
            products.length == 0
            ? <h2>Carrinho Vazio</h2>
            : products.map((item) => {
                return (
                    <li key={item.id}>
                        <div>{item.nome}</div>
                        <div>{item.preco}</div>
                        { props.cart 
                            ? ''
                            : <button onClick={() => addToCart(item)}>Comprar</button>
                        }
                    </li>
                )
            })
        )
    }

    return (
        <ul>
            { listProducts() }
        </ul>
    )
}

export default ProductList;