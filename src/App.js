import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import FormStudent   from './FormStudent'

// 1. Components
// 2. Bootstrap Di react
// 3. State

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <FormStudent />
      </div>
    );
  }
}

export default App;
