import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import MainContent from './MainContent';
import Footer from './Footer';
import Joke from './Joke';
import jokeData from './jokesData'
import jokesData from './jokesData';

function App() {
const jokeComponent = jokesData.map((joke)=>{
return(
  <Joke key = {joke.id} question={joke.question} punch = {joke.punch}/>
)
});

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
{jokeComponent}
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
