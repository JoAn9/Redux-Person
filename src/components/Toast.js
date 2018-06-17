import React from 'react';

const Toast = (props) => {
  console.log(props.message);
  return (
    <div className="toast toast-primary">
      <button
        onClick={props.dismiss}
        className="btn btn-clear float-right"></button>
      {props.message}
    </div>
  );
}

export default Toast;