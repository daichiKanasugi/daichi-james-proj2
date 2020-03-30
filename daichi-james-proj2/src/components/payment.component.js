//This page does not save any confidential information due to privacy concern
//Any data can be filled and it will not save
import React, { Component} from 'react';
import { Link } from 'react-router-dom';

export default class Payment extends Component{
  
    render() {
      return (
        <div>
        <h1>Payment Page</h1>
        <div className="form-group"> 
        <label>Name: </label>
        <input  type="text"
            required
            className="form-control"
            />
        </div>

        <div className="form-group"> 
        <label>Street Address: </label>
        <input  type="text"
            required
            className="form-control"
            />
        </div>

        <div className="form-group"> 
            <label>City: </label>
            <input  type="text"
                required
                className="form-control"
                />
        </div>

        <div className="form-group"> 
            <label>State: </label>
            <input  type="text"
                required
                className="form-control"
                />
        </div>

        <div className="form-group"> 
        <label>Zip Code: </label>
        <input  type="text"
            required
            className="form-control"
            />
        </div>

        <label style={{paddingBottom: '5px' }}>Payment Method: </label>
        <div className="form-group">
        <label style={{paddingLeft: '15px' }}></label>
            <input
              type="radio"
              name="react-tips"
              className="form-check-input"
            />
            OtterBucks
        </div>

        <div className="form-group">
        <label style={{paddingLeft: '15px' }}></label>
            <input
              type="radio"
              name="react-tips"
              className="form-check-input"
            />
            Cash
        </div>

        <div className="form-group">
        <Link to="/complete" className="btn btn-primary">Submit</Link>
        </div>
        </div>
      )
    }
  }