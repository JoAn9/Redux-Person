import { GET_WANTED_LIST, ADD_PERSON, DELETE_PERSON } from '../actions/types';

export default function(state=[], action) {
  // console.log(action.payload);

  switch(action.type) {
    case GET_WANTED_LIST:
      return action.payload;

    case ADD_PERSON:
      return [action.payload, ...state];

    case DELETE_PERSON:
      return state.filter(person => person.name !== action.payload.name);

    default:
      return state;
  }
}