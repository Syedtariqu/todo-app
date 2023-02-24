import React from 'react'

function Button({ type, variant = 'primary', children, ...rest }) {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'}
      className={`button button--${variant}`}
      {...rest}
    >
      {children}
    </button>
  )
}
function SelectButton({ children, ...rest }) {
  return (
    <select
      className="button button__select"
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button