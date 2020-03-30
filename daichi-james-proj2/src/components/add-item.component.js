/*
Creates an item for the whole list
*/

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      itemName: '',
      description: '',
      cost: 0,
      items: []
    }
  }

  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeCost(e) {
    this.setState({
      cost: e.target.value
    })
  }

  //New item is added into Item List
  onSubmit(e) {
    e.preventDefault();

    const item = {
      itemName: this.state.itemName,
      description: this.state.description,
      cost: this.state.cost
    }

    console.log(item);

    axios.post('http://localhost:3000/item/add', item)
      .then(res => console.log(res.data, "data input complete"));

    //window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>New Item Input Page</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.itemName}
              onChange={this.onChangeItemName}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Cost: </label>
          <input 
              type="number" 
              required
              className="form-control"
              value={this.state.cost}
              onChange={this.onChangeCost}
              />
        </div>
       
        <div className="form-group">
          <input type="submit" value="Add Item" className="btn btn-primary" />
        </div>

        <Link to="/item" className="btn btn-primary">Item List</Link>
      </form>
      {/* <Link to="/item" className="btn btn-primary">Item List</Link> */}
    </div>
    )
  }
}