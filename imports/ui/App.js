import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import TrakerReact from 'meteor/ultimatejs:tracker-react'

import AddCar from '../client/AddCar.js';

Cars = new Mongo.Collection("addCar");

class App extends TrakerReact(React.Component) {

cars(){
  return Cars.find().fetch();
}

    render(){
      console.log(this.cars());
      return (
        <div>
          <h1>airCar</h1>
          <AddCar />

        </div>
      )
    }

}

export default  App
