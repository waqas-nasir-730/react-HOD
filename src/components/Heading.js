import React from "react";
import WithCountHOD from "./WithCountHOD";

const Heading = ({ count, countHandler, name }) => {
  return (
    <h1 onMouseOver={countHandler}>
      {name} Hovered {count} times
    </h1>
  );
};

export default WithCountHOD(Heading, 3);
