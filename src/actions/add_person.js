import { ADD_PERSON } from './types';


export default function addPerson(person) {
  return dispatch => {
    dispatch(addPersonAsync(person));
  }
}

function addPersonAsync(person){
  return {
    type: ADD_PERSON,
    payload: person
  };
}
