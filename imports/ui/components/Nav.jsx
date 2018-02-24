
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Nav extends Component {

  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/vehicles">List a Vehicle</Link></li>
        <li><a href="#">Rent a Vehicle</a></li>
        <li style={{float: 'right'}}><a href="#">About Project</a></li>
      </ul>
    )
  }
}
