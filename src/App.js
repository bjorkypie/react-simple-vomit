//imports react so we can use it
import React, { Component } from 'react';
//imports the styling for the whole app
import './App.css';
//imports the following components:
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';

//enables us to use components
class App extends Component {
//function that renders the entire page, with all the elements 
  render() {
    return (
      <div className="App">
        {/* adding styling upon rendering header element */}
        <Header backColor="green" width="50%"></Header>
        {/* renders following elements as given from components */}
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}
// exporting the entire thing as a variable
export default App;
