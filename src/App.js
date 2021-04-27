import logo from './logo.svg';
import './App.css';import React, { Component } from 'react';
import Greet from './components/Greet'

import Hello from './components/Hello'
import Welcome from './components/Welcome'
class App extends Component {
  render(){
    return (
      <div className="App">
       {/* <Greet />
        <Welcome  />*/}
        <Hello  />
          
      </div>
    );
  }
}

      export default App;
