import { NEW_TOAST, CLEAR_TOAST } from '../actions/types';

export default function(state=null, action) {
  console.log(action.payload);
  switch (action.type) {
    case NEW_TOAST:
      return action.payload;

    case CLEAR_TOAST:
      return '';

    default:
      return state;
  }
}
