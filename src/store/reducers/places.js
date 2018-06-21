import { ADD_PLACE, DELETE_PLACE } from '../action/actionTypes';
import placeImage from '../../assets/beautiful-place.jpg';

const initialState = {
  places: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: placeImage
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.placeKey;
        })
      }
      
    default:
      return state
  }
};
