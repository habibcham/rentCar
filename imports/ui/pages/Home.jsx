
import { Link } from 'react-router';
import React, { Component } from 'react';

import Nav from '../components/Nav';
import ViewVehicle from '../components/ViewVehicle';


export default class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <ViewVehicle />
        <div className="row  margin-top">
          <div className="welcome">
            <div className="container max-width-960">
              <h1>Peer to peer blockchain car rental</h1>
              <h2>Welcome to airCAR. <br />Log into Ethereuem to continue.</h2>
            </div>
          </div>
          <div className="signin">
            <button className="button">Sign In</button>
          </div>
          <div id="carInfo">
            <div className="table-responsive">
              <table className="table table-striped table-bordered" id="carInfo-table">
                <thead>
                  <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Owner</th>
                    <th className="text-center">Make</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Location</th>
                    <th className="text-center">Price Per Day</th>
                    <th className="text-center">Deposit</th>
                    <th className="text-center">Available</th>
                    <th className="text-center">Mininum Rental Day</th>
                    <th className="text-center">Maximum Rental Day</th>
                    <th className="text-center">Currently Renting</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
