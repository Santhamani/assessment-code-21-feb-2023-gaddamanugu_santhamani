import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Nav';
import Explore from './components/pages/Explore'
import About from './components/pages/About';

class App extends React.Component {
  render() {
    return(
      <div>
      <div className='main-page'>
        <div className='secondary-div'>
          <Navbar />
          <div className='quote-msg'>
            <p className='quote'>Rethinking your living & renting
              <p className='tagline'>May your stay painless with us</p>
            </p>
          </div>
          <div className="search-bar">
            <div className='search-box'>
              Select your City
            </div>
            <div className='search-box'>
              Select your Dates
            </div>
            <div className='search-box'>
              Add Guests
            </div>
            <div className='search-box-button'>
              <img className='search' src='./Vectorsearch.png' alt='Search' />
              <span className='search-text'>Search</span>
            </div>
          </div>
          {/* <div className='border'>
          <img className='border-img' src='./Vectorborder.png' alt='Search' />
          </div> */}
        </div>
      </div>
        <Explore />
        <About />
        <div className='footer-nav-title'>
            <div className="footer-nav-title-tag">
             <p className='footer-logo'> Your logo</p>
              <span className='copy-right-tag'>©  2021  Company Name
All rights reserved</span>
            </div>
            <div className='menu-text'>Explore</div>
            <div className='menu-text'>Aboutus</div>
            <div className='menu-text'>Cities</div>
            <div className='footer-call menu-text'>Call</div>
        </div>
      </div>
    )}
}
export default App;
