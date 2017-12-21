import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { Component } from 'react';

import AppContent from './components/app-content';
import logo from './logo.svg';

class App extends Component {
  constructor () {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <AppContent />
    );
  }
}

export default App;
