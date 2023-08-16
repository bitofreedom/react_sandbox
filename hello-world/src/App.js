import React, { Component } from 'react'

import './App.css';
// import Greet from './components/Greeting';
// import Message from './components/Message';
import Counter from './components/Counter';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        {/* <Message /> */}
        {/* <Greet name="Darrin" favColor="Blue">
          <p>Additional text in child object</p>
        </Greet>
        <Greet name="Aiden" favColor="Green">
          <button>Action</button>
        </Greet>
        <Greet name="Madison" favColor="Purple" /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
      </div>
    );
  }
  
}

export default App;