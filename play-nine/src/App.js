import React, { Component } from 'react';
import './App.css';
import './index.css';
import './bootstrap.css';
var FontAwesome = require('react-fontawesome');
var _ = require('lodash');


const Stars = (props) => {
  return(
    <div className="col-5">
      {_.range(props.numberOfStars).map(i => 
        <FontAwesome key={i} className='fa fa-star'/>
      )}
    </div>
  );
}

const Button = (props) => {
  return(
    <div className="col-2">
    <button className="btn" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  );
}

const Answer = (props) => {
  return(
    <div className="col-5">
    {props.selectedNumbers.map((number,i) =>
      <span key={i}
          onClick={() => props.deSelectNumber(number)}>
        {number}
      </span>
    )}
    </div>
  );
}

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  };
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} className={numberClassName(number)}
                onClick={() => props.selectNumber(number)}>
            {number}
          </span>
        )}
      </div>
    </div>
  );
};
Numbers.list = _.range(1,10); //loadash functions

class Game extends Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random()*9),
  };

  selectNumber = (clickedNumber) =>{
    if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {return;}
    this.setState(prevState => ({
      selectedNumbers : prevState.selectedNumbers.concat(clickedNumber)
    }));
  }

  deSelectNumber = (clickedNumber) =>{
    this.setState(prevState => ({
      selectedNumbers : prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }));
  }
  render(){
    // reducing calls using this.state,selectedNumbers, ...
    const { selectedNumbers, randomNumberOfStars } = this.state;
    return(
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Play Nine</h2> 
        </div>
        <br />
        <br />
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars}/>
          <Button selectedNumbers={selectedNumbers}/>
          <Answer selectedNumbers={selectedNumbers}
                  deSelectNumber={this.deSelectNumber}/>          
        </div>
        <br />
        <Numbers selectedNumbers={selectedNumbers}
                 selectNumber={this.selectNumber}/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
