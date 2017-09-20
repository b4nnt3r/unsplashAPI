export const GET_PHOTOS = 'GET_PHOTOS';

const makeActionCreator = (action_type) => {
  return function (payload) {
    return {
      type: action_type,
      payload
    }
  }
}

export const getPhotos = makeActionCreator(GET_PHOTOS);
