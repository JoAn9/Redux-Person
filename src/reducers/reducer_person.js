import { GET_WANTED_LIST, ADD_PERSON } from '../actions/types';

export default function(state=[], action) {
  console.log(action.payload);
  switch(action.type) {
    case GET_WANTED_LIST:
      return action.payload;

    case ADD_PERSON:
      [action.payload, ...state];

    default:
      return state;
  }
}