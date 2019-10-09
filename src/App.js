import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import MainContent from './MainContent';
import Footer from './Footer';
import Joke from './Joke';

function App() {
  return (
    <div className="App">




      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   <Joke question ='What do you call a funny mountain?' punch ='hill-arious'/>
   <Joke question ='What goes up when the rain comes down?' punch ='An umbrella.' />
   <Joke question ='What did one raindrop say to the other?' punch ='Two’s company, three’s a cloud'/>
   <Joke question ='What do you call a dentist in the army?' punch ='A drill sergeant'/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
