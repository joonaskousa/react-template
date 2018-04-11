/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => (
  <body>
  <div>
  <div>
    <h1>Onko mursut kivoja?</h1>
  <div>Mursut on kivoja. Se on yleisesti todettu fakta.</div>

    <img src="https://upload.wikimedia.org/wikipedia/en/c/c6/Intergalactic_walrus.png" border="5px" color="blue" ></img>
    <iframe src="https://discordapp.com/widget?id=182029211895070720&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
  </div>
  <p>karhu on close enough mursu</p>
  <video src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" height="320px" width="320px" margin="0px" controls>nii huono selain ettei video näy</video>
  </div>
  </body>
  
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
