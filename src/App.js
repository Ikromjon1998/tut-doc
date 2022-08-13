import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';



function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

export default App;
