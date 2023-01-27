import React from "react";
import ReactDOM from "react-dom";

let tick = () => {
  let element = (
    <div>
      <h1>Hello Elvin</h1>
      <h3>it is {new Date().toLocaleTimeString()} </h3>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
};

setInterval(() => {
  tick();
}, 1000);
