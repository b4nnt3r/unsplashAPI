import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Results from './components/Results'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Unsplash API Image Search</h2>
        </div>

        <form>
          <input type="search" className="hiImInput" placeholder="Search for Images..." />
          <button>Refresh</button>
        </form>
        <div className="search_results">
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
