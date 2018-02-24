
import { Link } from 'react-router-dom';
import React, { Component } from 'react';


import VehiclesPage from '../pages/VehiclesPage.jsx'

export default class ViewVehicle extends Component {

  render() {
    return (
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




    )
  }
}
