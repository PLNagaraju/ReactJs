import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return <h2>Hello World !! Welcome to React Learning</h2>
}

ReactDom.render(<Greeting />, document.getElementById('root'));