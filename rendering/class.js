import React from "react";
import ReactDOM from "react-dom";

class Contactlist extends React.Component {
  render() {
    const people = [{ name: "Tyler" }, { name: "Karen" }, { name: "Richard" }];

    return (
      <ol>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

ReactDOM.render(<Contactlist />, document.getElementById("root"));
