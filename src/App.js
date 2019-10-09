import React from "react";
import logo from "./logo.svg";
import "./App.css";
import productsData from "./productData";
import Product from "./Product";

function App() {
  const productComponent = productsData.map(product => {
    return (
      <Product key={product.id} name={product.name} price={product.price} description={ product.description}/>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {productComponent}
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
