import { CartProvider } from './cart.provider'
import { OrderProvider } from './order.provider'

function Contexts(props) {

    return (
        <OrderProvider>
            <CartProvider>
                {props.children}
            </CartProvider>
        </OrderProvider>
    )
}

export default Contexts