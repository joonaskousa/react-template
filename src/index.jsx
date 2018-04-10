/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => (
  <div>
  <div>Mursut on kivoja</div>


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
