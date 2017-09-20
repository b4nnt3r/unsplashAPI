import React, { Component } from 'react';
import { connect } from 'react-redux';
import { APP_ID } from './tokens';
import { getPhotos, loadingFinished, searchPhotos } from './actions'
import loader from './loader.gif'
import logo from './logo.svg';
import './App.css';
// import Results from './components/Results'

const Loader = () => (
  <div style={{position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, zIndex: 10, background: 'rgba(0, 0, 0, 0.2)'}}>
    <img src={loader} style={{ marginTop: '50vh'}} alt="loader"/>
  </div>
)

class App extends Component {

  componentDidMount() {
    let url = `https://api.unsplash.com/photos/?client_id=${APP_ID}`;
    // Fetch data from API
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      console.log(json)
      this.props.getPhotosAsProp(json)
      this.props.loadingFinishedAsProp()
      }
    )}

    handleSubmit(event) {
      event.preventDefault()
      const whatWasTyped = this.text.value
      this.props.searchPhotosAsProp(whatWasTyped)
    }

  render() {
    return (
      <div className="App">
        {this.props.isLoading && <Loader />}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Unsplash API Image Search</h2>
        </div>
        <p className="App-intro">
          There are {this.props.photos.length} photos.
        </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="search" className="hiImInput" placeholder="Search for images..." ref={element => this.text=element}/>
          <button>Refresh</button>
        </form>
        <div className="search_results">
          {this.props.photos.map(photo => <div><img src={photo.urls.small} alt="pic" /></div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotosAsProp: (photosTheParameter) =>
    dispatch(getPhotos(photosTheParameter)),
    loadingFinishedAsProp: () => dispatch(loadingFinished()),
    searchPhotosAsProp: (searchTerm) => dispatch(searchPhotos(searchTerm))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
