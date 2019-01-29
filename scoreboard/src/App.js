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
    hitsHome: 0,
    hitsAway: 0,
    errorsHome: 0,
    errorsAway: 0,
  };

  addStrike = event => {
    // event.preventDefault();
    if (this.state.strikes < 2) {
      this.setState(prevState => {
        return { strikes: prevState.strikes + 1 };
      });
    } else {
      this.setState({ strikes: 0, balls: 0 });
      this.addOut();
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

  addOut = event => {
    // event.preventDefault();

    if (this.state.outs < 2) {
      this.setState(prevState => {
        return { outs: prevState.outs + 1 };
      });
    } else {
        this.setState({ outs: 0 });

        if (this.state.topInning === false) {
          this.setState(prevState => {
            return { inning: prevState.inning + 1, topInning: true };
          });

        } else {
          this.setState({ topInning: false });
        };
    }
  }

  addHit = event => {
    event.preventDefault();

    if (this.state.topInning === true) {
      this.setState(prevState => {
        return { hitsHome: prevState.hitsHome + 1 };
      });
    } else {
      this.setState(prevState => {
        return { hitsAway: prevState.hitsAway + 1 };
      });
    };
  };

  addError = event => {
    event.preventDefault();

    if (this.state.topInning === true) {
      this.setState(prevState => {
        return { errorsHome: prevState.errorsHome + 1 };
      });
    } else {
      this.setState(prevState => {
        return { errorsAway: prevState.errorsAway + 1 };
      });
    };
  };

  addRun = event => {
    event.preventDefault();

    if (this.state.topInning === true) {
      this.setState(prevState => {
        return { totalScoreHome: prevState.totalScoreHome + 1 };
      });
    } else {
      this.setState(prevState => {
        return { totalScoreAway: prevState.totalScoreAway + 1 };
      });
    };
  };

  render() {
    return (
      <div>
        <Dashboard
          addStrike={this.addStrike}
          addBall={this.addBall}
          addOut={this.addOut}
          addHit={this.addHit}
          addError={this.addError}
          addRun={this.addRun}
        />
        <Display
          strikes={this.state.strikes}
          balls={this.state.balls}
          outs={this.state.outs}
          inning={this.state.inning}
          topInning={this.state.topInning}
          totalScoreHome={this.state.totalScoreHome}
          totalScoreAway={this.state.totalScoreAway}
          hitsHome={this.state.hitsHome}
          hitsAway={this.state.hitsAway}
          errorsHome={this.state.errorsHome}
          errorsAway={this.state.errorsAway}
        />
      </div>
    );
  }
}

export default App;
