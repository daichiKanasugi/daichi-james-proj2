import React, { Component} from 'react';
import axios from 'axios';

export default class Complete extends Component {
  
  onSubmit(e){
    console.log("Phase 1");
    e.preventDefault();
    console.log("Attempt to Delete");

    axios.delete('http://localhost:3000/cart/')
      .then(response => { console.log("Everything is deleted")});

      window.location = '/home';
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <h1>Payment Completed</h1>
        <h5 style = {{paddingBottom: '25px'}}>Your Payment has been processed! Return Home to shop again!</h5>
        <div className="form-group">
          <input type="submit" value="Home" className="btn btn-primary" />
        </div>
        </form>
      </div>
    )
  }
}