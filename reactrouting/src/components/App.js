import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import { Route, Link } from 'react-router-dom';
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';


class App extends Component {
  render() {
    return (
      <div>
        This is App.js
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
        </nav>

{
// app calls router to switch between components
}
          <Route exact path="/" component = {Home}/>
          <Route path="/About" component = {About}/>
      </div>
    );
  }
}

export default App;
