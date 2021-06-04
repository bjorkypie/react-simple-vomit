import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    //use style variable to group all the property styles together
    const style = {
      width: this.props.width,
      //ability to use different names for properties
      backgroundColor: this.props.backColor
    }
    //render the header element using style variable
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header;


//document.querySelector("header").style.backgroundColor = "red"
