import React, { Component } from 'react';

import Dashboard from './components/Dashboard.js';
import Display from './components/Display.js';

import './App.css';

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    outs: 0,
    inning: 1,
    topInning: true,
    totalScoreHome: 0,
    totalScoreAway: 0,
    currentInningScoreHome: 0,
    currentInningScoreAway: 0,
  };

  addStrike = event => {
    event.preventDefault();
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } else {
      this.setState({ strikes: 0, balls: 0 });
    }
  };

  addBall = event => {
    event.preventDefault();

    if (this.state.balls < 3) {
      this.setState(prevState => {
        return { balls: prevState.balls + 1 };
      });
    } else {
      this.setState({ strikes: 0, balls: 0 })
    }
  };

  render() {
    return (
      <div>
        <Dashboard addStrike={this.addStrike} addBall={this.addBall} />
        <Display strikes={this.state.strikes} balls={this.state.balls} />
      </div>
    );
  }
}

export default App;
