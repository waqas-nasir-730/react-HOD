import React from "react";
import WithCountHOD from "./WithCountHOD";

const Button = ({ count, countHandler, name }) => {
  return (
    <button onClick={countHandler}>
      {name} Clicked {count} times
    </button>
  );
};

export default WithCountHOD(Button, 5);
