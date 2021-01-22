import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Cart from './Cart'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>MyFitnessplace</h1>
  </div>
);

export default App;
