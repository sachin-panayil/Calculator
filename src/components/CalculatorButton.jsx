import React from "react";

const CalculatorButton = (props) => {
  return (
    <button
      className={` col-${props.width} btn btn-light my-2`}
      onClick={props.addToOutputStr}
      value={props.value}
    >
      {props.value}
    </button>
  );
};

export default CalculatorButton;
