import React, { Component } from 'react';
import './App.css';
import './index.css';
import './bootstrap.css';
var FontAwesome = require('react-fontawesome');


const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);

  let stars = [];
  for(let i=0; i<numberOfStars; i++){
    stars.push(<FontAwesome key={i} className='fa fa-star'/>)
  }
  return(
    <div className="col-5">
      {stars}
    </div>
  );
}

const Button = (props) => {
  return(
    <div className="col-2">
    <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return(
    <div className="col-5">
    ...
    </div>
  );
}

const Numbers = (props) => {
    return(
      <div className="card text-center">
        <div>
          <span className="number">1</span>
          <span className="number selected">2</span>
          <span className="number used">3</span>
        </div>
      </div>
    );
}

class Game extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Play Nine</h2> 
        </div>
        <br />
        <br />
        <div className="row">
          <Stars />
          <Button />
          <Answer />          
        </div>
        <br />
        <Numbers />
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
