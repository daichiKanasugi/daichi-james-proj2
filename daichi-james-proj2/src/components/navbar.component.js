import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/HOme" className="navbar-brand">Sup Store</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto" style={{margin: 0, right: 180,left: 'auto', position: 'fixed',}}>
            <li className="navbar-item">
              <Link to="/item" className="nav-link">Items</Link>
            </li>
            <li className="navbar-item" style={{float: "right"}}>
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }


}