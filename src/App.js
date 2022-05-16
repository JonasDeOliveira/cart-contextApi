import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import './App.css';
import CartContext, { CartProvider } from './context/cart.provider'

function App(props) {
  return (
    <CartProvider>
      <Router>
        <Routes/>
      </Router>
    </CartProvider>


  );
}

export default App;
