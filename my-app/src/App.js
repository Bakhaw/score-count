import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass ({

  render : function() {
    return (
      <div>
        <h1>Compteur du futur</h1>
        <Player name="Ali"/>
        <Player name="Franck"/>
      </div>
    );
  }
})

var Player = React.createClass ({

  getInitialState : function () {
    return {
      playerScore: 0
    }
  },

incrementScore : function() {
  this.setState({
    playerScore: this.state.playerScore + 1
  })
},

decrementScore : function() {
  this.setState({
    playerScore: this.state.playerScore - 1
  })
},
  render : function() {
    return (
      <div className="componentPlayer">
        <h1>{this.props.name}</h1>
        <button onClick={this.decrementScore}>-</button>
        <h1>{this.state.playerScore}</h1>
        <button onClick={this.incrementScore}>+</button>
      </div>
    )
  }
})

export default App;
