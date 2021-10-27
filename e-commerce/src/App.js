import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import Nav from './components/Nav';
import Home from './components/Home';
import Product from "./components/Product";
import ProductDetail from './components/ProductDetail';


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
    
  
   </Switch> 
  </Router>
  </div>
  );
}

export default App;

