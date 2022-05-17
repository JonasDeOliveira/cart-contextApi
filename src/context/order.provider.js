import React, { useState, createContext } from 'react'

const OrderContext = createContext({})

function OrderProvider(props) {

    const [order, setOrder] = useState({})

    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {props.children}
        </OrderContext.Provider>
    )

}

export { OrderProvider }
export default OrderContext
