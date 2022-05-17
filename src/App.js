import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import './App.css';
import Contexts from './context'

function App(props) {
  return (
    <Contexts>
      <Router>
        <Routes />
      </Router>
    </Contexts>
  );
}

export default App;
