import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Nav from './components/Nav';
import Home from './components/Home';
import Product from "./components/Product";
import ProductDetail from './components/ProductDetail';
import Four04 from './components/Four04';


function App() {
  return (
    <div>
      <Router>
          <Nav/>
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/products" exact component={Product} /> 
          <Route path="/product/:id" component={ProductDetail} /> 
          <Route path="/cart" exact component={Cart} /> 
          <Route path="/checkout" exact component={Checkout} /> 
          <Route path="/" component={Four04} />
        </Switch> 
      </Router>
  </div>
  );
}

export default App;

