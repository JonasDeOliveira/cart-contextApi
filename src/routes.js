import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/Home'
import Cart from './pages/Cart'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route component={() => <div>Página não encontrada</div>}/>
        </Switch>
    )
}