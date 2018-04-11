/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => (
  <div>
    <h1>Onko mursut kivoja?</h1>
  <div>Mursut on kivoja. Se on yleisesti todettu fakta.</div>

    <img src="https://upload.wikimedia.org/wikipedia/en/c/c6/Intergalactic_walrus.png" border="5px" ></img>
    <iframe src="https://discordapp.com/widget?id=182029211895070720&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
  </div>
);

class App extends Component {
  render() {
    return (
      <Hello />
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
