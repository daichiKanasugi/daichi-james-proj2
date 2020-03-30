import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Item = props => (
  <tr>
    <td>{props.item.itemName}</td>
    <td>{props.item.description}</td>
    <td>{props.item.cost}</td>
  </tr>
)

export default class CreatePurchase extends Component {
  constructor(props) {
    super(props);

    this.onChangeCartName = this.onChangeCartName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cartName: '',
      description: '',
      cost: 0,
      items: []
    }
  }

  //loads all the item list
  componentDidMount() {
    axios.get('http://localhost:3000/item/')
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeCartName(e){
    this.setState({
      cartName: e.target.value
    })
  }

  onChangeDescription(e) {
     this.setState({
       description: e.target.value
     })
   }

   onChangeCost(e){
     this.setState({
       cost: e.target.value
     })
   }
   
  //when users submit, a new item is added into the cart
  onSubmit(e) {
    e.preventDefault();
    const cart = {
      cartName: this.state.cartName,
      description: this.state.description,
      cost: this.state.cost
    }
    console.log(cart);
    console.log("attempting to add items");

    axios.post('http://localhost:3000/cart/add', cart)
      .then(res => console.log(res.data));
  }

  deleteItem(id) {
    axios.delete('http://localhost:3000/item/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      items: this.state.items.filter(el => el._id !== id)
    })
  }

  //displays all item
  itemList() {
    return this.state.items.map(currentitem => {
      return <Item item={currentitem}/>;
    })
  }  

  render() {
    return (
    <div>
      <h3>Purchase Order Adding to Cart</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            { this.itemList() }
          </tbody>
        </table>

        <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.cartName}
              onChange={this.onChangeCartName}
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
       

        <table className="table">
          <thead>
            <tr>
              <th>        
                <div className="form-group">
                  <input type="submit" value="Add Item" className="btn btn-primary" />
                </div>
              </th>
              <th>
                <div className="form-group">
                  <Link to="/item" className="btn btn-primary">Item List</Link>
                </div>
              </th>
              
              <th>
                <div className="form-group">
                  <Link to="/cart" className="btn btn-primary">View Cart</Link>
                </div>
              </th>
            </tr>
          </thead>
        </table>

        </form>
      </div>
    )}}



    //   <form onSubmit={this.onSubmit}>
    //     <div className="form-group"> 
    //       <label>Item Name: </label>
    //       <select ref="userInput"
    //           required
    //           className="form-control"
    //           value={this.state.cartName}
    //           onChange={this.onChangeCartName}>
    //           {
    //             this.state.items.map(function(item,index) {
    //               return <option key={item} value={item}>
    //                 {item}
    //               </option>;
    //             })
    //           }
    //       </select>
    //     </div>

    //     <div className="form-group"> 
    //       <label>Pick Description: </label>
    //       <select ref="userInput"
    //           required
    //           className="form-control"
    //           value={this.state.description}
    //           onChange={this.onChangeDescription}>
    //           {this.state.items.map(description => (
    //               <option key={description.key} value={description.value}>
    //                 {description.display}
    //               </option>
    //             ))
    //           }
    //       </select>
    //     </div>

    //    <div className="form-group"> 
    //       <label>Cost: </label>
    //       <select ref="userInput"
    //           required
    //           className="form-control"
    //           value={this.state.cost}
    //           onChange={this.onChangeCost}>
    //           {
    //             this.state.items.map(function(cost) {
    //               return <option key={cost} value={cost}>
    //                 {cost}
    //               </option>;
    //             })
    //           }
    //       </select>
    //     </div> 

    //     <div className="form-group">
    //       <input type="submit" value="Add to Cart" className="btn btn-primary" />
    //       <Link to="/item" className="btn btn-primary">Item List</Link>
    //     </div>
    //     <div className="form-group">
    //     </div>
    //   </form>
    // </div>  
