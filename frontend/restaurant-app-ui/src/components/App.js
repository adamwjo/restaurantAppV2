import React, { Component } from 'react';
import Menu from '../containers /UImenu'
import 'semantic-ui-css/semantic.min.css'

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default App;
