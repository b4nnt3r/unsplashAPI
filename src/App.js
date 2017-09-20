import React, { Component } from 'react';
import { connect } from 'react-redux';
import { APP_ID } from './tokens';
import { getPhotos } from './actions'
import logo from './logo.svg';
import './App.css';
// import Results from './components/Results'

class App extends Component {

  componentDidMount() {
    let url = `https://api.unsplash.com/photos/?client_id=${APP_ID}`;
    // Fetch data from API
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      console.log(json)
      this.props.getPhotosAsProp(json)
      }
    )}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Unsplash API Image Search</h2>
        </div>
        <p className="App-intro">
          There are {this.props.photos.length} photos.
        </p>
        <form>
          <input type="search" className="hiImInput" placeholder="Search for Images..." />
          <button>Refresh</button>
        </form>
        <div className="search_results">
          {}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotosAsProp: (photosTheParameter) =>
    dispatch(getPhotos(photosTheParameter))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
