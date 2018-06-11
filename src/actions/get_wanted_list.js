import { GET_WANTED_LIST } from './types';
import axios from 'axios';

export default function getWantedList() {
  return dispatch => {
    axios.get('../wanted_list.json')
      .then(res => {
        console.log(res);
        const people = res.data.map(person => {
          person.note = 'none';
          return person;
        });
        dispatch(getUserAsync(people));
      });
  }
}

function getUserAsync(people) {
  console.log(people);
  return {
    type: GET_WANTED_LIST,
    payload: people
  };
}