import { APP_ID } from './tokens';

export const GET_PHOTOS = 'GET_PHOTOS';
export const LOADING_FINISHED = 'LOADING_FINISHED';
export const SEARCH_PHOTOS = 'SEARCH_PHOTOS'

const makeActionCreator = (action_type) => {
  return function (payload) {
    return {
      type: action_type,
      payload
    }
  }
}

export const getPhotos = makeActionCreator(GET_PHOTOS);
export const loadingFinished = makeActionCreator(LOADING_FINISHED);

export const searchPhotos = (query) => {
  return (dispatch, getState) => {
    let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${APP_ID}`;
    // Fetch data from API
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      console.log(json)
      dispatch(getPhotos(json))
      dispatch(loadingFinished())
      }
    )}
  }
