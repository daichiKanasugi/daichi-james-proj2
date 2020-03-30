import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Item = props => (
  <tr>
    <td>{props.item.itemName}</td>
    <td>{props.item.description}</td>
    <td>{props.item.cost}</td>
    <td>
      <Link to={"/edit/"+props.item._id}>edit</Link> | <a href="#" onClick={() => { props.deleteItem(props.item._id) }}>delete</a>
    </td>
  </tr>
)

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this)

    this.state = {items: []};
  }

  componentDidMount() {
    console.log("getting database")
    axios.get('http://localhost:3000/item/')
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch((error) => {
        console.log(error);
        console.log("item list did not load, try again");
      })
  }


  deleteItem(id) {
    axios.delete('http://localhost:3000/item/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      items: this.state.items.filter(el => el._id !== id)
    })
  }

  itemList() {
    return this.state.items.map(currentitem => {
      return <Item item={currentitem} deleteItem={this.deleteItem} key={currentitem._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Item List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            { this.itemList() }
          </tbody>
        </table>

        <table className="table">
          <thead>
          <tr>
        <th><Link to="/cart-add" className="btn btn-primary">Add Items to Cart</Link></th>
        <th><Link to="/item-add" className="btn btn-primary">Add Items to the List</Link></th>
        <th><Link to="/cart" className="btn btn-primary"> View Cart</Link></th>
        </tr></thead>
        </table>
      </div>
    )
  }
}