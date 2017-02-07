import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JokeGenerator from './components/joke-generator';
import JokeLoader from './components/joke-loader';

// This module needs to be here to make mobile touch/clicks more performant
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <JokeGenerator>
            <JokeLoader />
          </JokeGenerator>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
