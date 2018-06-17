import { NEW_TOAST } from './types';

export default function newToast(message) {
  return dispatch => {
    dispatch(addToastAsync(message));
  }
}

function addToastAsync(message) {
  return {
    type: NEW_TOAST,
    payload: message,
  };
}