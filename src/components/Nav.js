
import './Nav.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              Your logo
            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <a href="#" target="_blank">Explore</a>
            <a href="#" target="_blank">About Us</a>
            <a href="#" target="_blank">Cities</a>
            <a href="#" target="_blank" className='call'>Call</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Navbar;
