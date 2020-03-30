import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cost = props => (
  <tr>
    <td>{props.cart.cartName}</td>
    <td>{props.cart.description}</td>
    <td>{props.cart.cost}</td>
    <a href="#" onClick={() => { props.deleteCart(props.cart._id) }}>Delete</a>
  </tr>
)

export default class CostsList extends Component {
  constructor(props) {
    super(props);
    this.deleteCart = this.deleteCart.bind(this)
    this.state = {carts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3000/cart/')
      .then(response => {
        this.setState({ carts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCart(id) {
    axios.delete('http://localhost:3000/cart/'+id)
      .then(response => { console.log(response.data)});
    this.setState({
      carts: this.state.carts.filter(el => el._id !== id)
    })
  }


//Displays all Cart List
  cartList() {
    return this.state.carts.map(currentcart => {
      return <Cost cart={currentcart} deleteCart={this.deleteCart} key={currentcart._id}/>;
    })
  }
  
//Returns the total cost of all items
  Total(){
    return this.state.carts.reduce((total, carts) => total + carts.cost, 0);
  }

  render() {
    return (
      <div>
        <h3>Cost Order</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Delete Button</th>
            </tr>
          </thead>
          <tbody>
            { this.cartList() }
          </tbody>
        </table>

        <h4>Total: ${this.Total()}</h4>
        
        <table className="table">
          <thead>
          <tr>
        <th> <Link to="/item" className="btn btn-primary">Item List</Link></th>
        <th><Link to="/payment" className="btn btn-primary">Payment</Link></th>
        </tr></thead>
        </table>
      </div>    
    )
  }
}