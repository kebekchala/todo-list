import React from 'react';

const Button = ({ label, type, action }) => {

  return (
    <button
      className={`${type !== 'submit' ? 'button__action' : 'button__add'}`}
      onClick={() => !!action ? action(label) : ''}
      >
      {label}
    </button>
  );
}

export default Button;