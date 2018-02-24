
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/Nav';
import { insert } fxrom '/imports/api/vehicles/methods.js';

export default class VehiclesPage extends Component {

  constructor(props) {
    super(props);

    this.addCar = this.addCar.bind(this);
  }

  addCar(event) {
    event.preventDefault(); //prevent page from reloading

    const data = {
      make: ReactDOM.findDOMNode(this.refs.make).value.trim(),
      model: ReactDOM.findDOMNode(this.refs.model).value.trim(),
      pricePerDay: ReactDOM.findDOMNode(this.refs.pricePerDay).value.trim(),
      deposit: ReactDOM.findDOMNode(this.refs.deposit).value.trim(),
      minRentalDay: ReactDOM.findDOMNode(this.refs.minRentalDay).value.trim(),
      maxRentalDay: ReactDOM.findDOMNode(this.refs.maxRentalDay).value.trim(),
      location: ReactDOM.findDOMNode(this.refs.location).value.trim(),
    }

    console.log(data);

    insert.call({ data: data }, (error, result) => {
      if(error) {
        alert(error.reason);
      }
      if(result) {
        alert('Car added successfully!');
      }
    })
  }

  render() {

    const { vehicles } = this.props;

    let VehiclesRows;

    if(vehicles && vehicles.length) {
      VehiclesRows = vehicles.map((vehicle) => (
        <tr key={vehicle._id}>
          <td>{vehicle.make}</td>
          <td>{vehicle.model}</td>
          <td>{vehicle.pricePerDay}</td>
          <td>{vehicle.deposit}</td>
        </tr>
      ))
    }

    return (
      <div>
        <Nav />
        <div>
          <h3>Your Ethereum Wallet Balance is £0.01</h3>{/*-web3 get balance*/}
          <div className="Rent-a-Vechile">
            <table>
              <thead>
                <tr>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Pricer per day</th>
                  <th>Deposit</th>
                </tr>
              </thead>
              <tbody>
                {VehiclesRows}
              </tbody>
            </table>
            <form onSubmit={this.addCar}>
              <label htmlFor="make">Make</label>
              <input type="text" id="make" name="make" ref="make" placeholder="Make of Vechile" />
              <label htmlFor="model">Model</label>
              <input type="text" id="model" name="model" ref="model" placeholder="Make of Vechile" />
              <label htmlFor="pricePerDay">Price per Day</label>
              <input type="text" id="pricePerDay" name="pricePerDay" ref="pricePerDay" placeholder="Price per Day to rent vechile" />
              <label htmlFor="deposit">Deposit</label>
              <input type="text" id="deposit" name="deposit" ref="deposit" placeholder="Deposit to rent vechile" />
              <label htmlFor="minRentalDay">Minimum Rental Day</label>
              <input type="number" id="minRentalDay" name="minRentalDay" ref="minRentalDay" placeholder="Minimum rental day to rent vechile" />
              <label htmlFor="maxRentalDay">Maximum Rental Day</label>
              <input type="text" id="maxRentalDay" name="maxRentalDay" ref="maxRentalDay" placeholder="Maximum rental day to rent vechile" />
              <label htmlFor="available">Available</label>
              <input type="radio" id="available" name="available" ref="available" defaultValue="Yes" /> Yes <input type="radio" name="Available" defaultValue="No" /> No
              <br /><br />
              <label htmlFor="location">Location</label>
              <select id="location" name="country" ref="location">
                <option value="London Heathrow">Australia</option>
                <option value="London Gatwick">Canada</option>
                <option value="London Stanstead">USA</option>
              </select>
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}
