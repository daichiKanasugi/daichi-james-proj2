import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class EditItem extends Component {
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

  componentDidMount() {
    axios.get('http://localhost:3000/item/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          itemName: response.data.itemName,
          description: response.data.description,
          cost: response.data.cost
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:3000/item/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            items: response.data.map(item => item.itemName),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

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

  onSubmit(e) {
    e.preventDefault();

    const item = {
      itemName: this.state.itemName,
      description: this.state.description,
      duration: this.state.cost
    }

    console.log(item);

    axios.post('http://localhost:3000/item/update/' + this.props.match.params.id, item)
      .then(res => console.log(res.data + "data update complete"))
      .catch((error) => {
        console.log(error);
      })
    // window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Item Page</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.itemName}
              onChange={this.onChangeItemName}>
              {
                this.state.items.map(function(itemName) {
                  return <option 
                    key={itemName}
                    value={itemName}>{itemName}
                    </option>;
                })
              }
          </select>
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
              type="text" 
              className="form-control"
              value={this.state.cost}
              onChange={this.onChangeCost}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Purchase Log" className="btn btn-primary" />
        </div>
        <Link to="/item" className="btn btn-primary">View Item List</Link>
      </form>
    </div>
    )
  }
}