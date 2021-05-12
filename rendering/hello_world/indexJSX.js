import React from "react";
import ReactDOM from "react-dom";

const people = [
    { name: "Tyler" }, 
    { name: "Karen" }, 
    { name: "Richard" }
];

const element =
  <ol>
    {people.map((person) => (
      <li key={person.name}>{person.name}</li>
    ))}
  </ol>

ReactDOM.render(element, document.getElementById("root"));