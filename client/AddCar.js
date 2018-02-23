import React, {Component} from 'react';




export default class AddCar extends Component {

  addCar(event){
    event.preventDefault();
    /*var text = this.refs.Make.value.trim();

      addCar.insert({
        text: text,
        complete: false,
        createdAt: new Date()
      })
      this.refs.addCar.value="";*/
    console.log(this);
  }
    render() {
        return (
          <form className="add-ar" onSubmit={this.addCar.bind(this)}>
            <input type="text" ref="make" placeholder="Enter Make of Vehicle"/>
          /*  <input type="text" ref="model" placeholder="Enter Model of Vehicle"/>
            <input type="text" ref="location" placeholder="Enter Location of Vehicle"/>
            <input type="text" ref="PricePerDay" placeholder="Enter Price per day of Vehicle"/>
            <input type="text" ref="deposit" placeholder="Enter Deposit of Vehicle"/>
            <input type="text" ref="MinRentalDay" placeholder="Enter Minimum RentalDay of Vehicle"/>
            <input type="text" ref="MaxRentalDay" placeholder="Enter Maximum Rental Day of Vehicle"/>
            <input type="text" ref="Available" placeholder="Enter Availability of Vehicle"/>*/
          </form>

        )
    }
}
