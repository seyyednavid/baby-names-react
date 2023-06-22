import React from "react";

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: `${props.color}` }}
      className={props.active ? "active" : ""}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
