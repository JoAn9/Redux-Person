
import { DELETE_PERSON } from './types';

export default function deletePerson(person) {
  return dispatch => {
    dispatch(deletePersonAsync(person));
  }
}

function deletePersonAsync(person){
  console.log(person);
  return {
    type: DELETE_PERSON,
    payload: person // assuming every person has a unique name (which you should never do!), this will work.
  };
}