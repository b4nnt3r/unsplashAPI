import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import './index.css';
import App from './App';
import reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVOTION_EXTENSION__&&window.__REDUX_DEVOTION_EXTENSION__( )
// )

const store = createStore(reducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
