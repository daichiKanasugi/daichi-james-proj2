import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h3 style = {{paddingTop: '1px'}}>Who are we?</h3>
        <h5>We are a web store that sell anything for people!</h5>
        <h5 style = {{paddingBottom: '25px'}}>Are you ready to check out our store? Press the button below to start!</h5>
        <table className="table">
          <thead>
            <tr>
        <th> <Link to="/item" className="btn btn-primary">View List</Link></th>
        <th> <Link to="/item-add" className="btn btn-primary"> Add Item</Link></th>
        <th><Link to="/cart" className="btn btn-primary"> View Cart</Link></th>
          </tr>
          </thead>
        </table>
       

      </div>
    )
  }
}