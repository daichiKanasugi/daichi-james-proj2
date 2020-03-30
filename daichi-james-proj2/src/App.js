import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login.component";
import Home from "./components/home.component";
import Navbar from "./components/navbar.component";

import CreateUser from "./components/create-user.component";
import Items from "./components/item-list.compoment";
import AddItems from "./components/add-item.component";
import EditItem from "./components/edit-item.component";
import AddCart from "./components/add-cart.component";
import Cart from "./components/cart.component";
import Payment from "./components/payment.component";
import Complete from "./components/complete.component";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Login} />
        <Route path="/Home" component = {Home} />

        <Route path="/item" component={Items} /> 
        <Route path="/item-add" component={AddItems} />

        <Route path="/cart" component={Cart} />
        <Route path="/cart-add" component = {AddCart} />
      
        <Route path="/edit/:id" component={EditItem} />
        <Route path="/create-user" component={CreateUser} />

        <Route path="/payment" component={Payment} />
        <Route path="/complete" component={Complete} />
      </div>
    </Router>
  );
}

export default App;