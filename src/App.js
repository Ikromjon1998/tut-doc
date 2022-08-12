import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from './Welcome';
import Comment from './Comment';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React",
  author: {
    name: 'Hello Kitty', 
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

const title = element;
const element2 = <h1>{title}</h1>
const element1 = <a href='https://reactjs.org/'> link </a>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Comment date={comment.date} text={comment.text} author={comment.author} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {element2}
        {element1}
        <Welcome name="Ikrom" />        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
