import React from "react";
import ReactDOM from "react-dom";


/*
const element = React.createElement("div", {
    //createElement creates a js object
    className: 'welcome-message'
}, "Hello World");
*/

/*
React.createElement(
    type{html tag or react component}, 
    props{null or object of html attributes}, 
    content{text, js code or other React elements}
)
*/

/*
const element = React.createElement(
    //list
    "div",
    null,
    React.createElement("span", null, "Hello World"),
    React.createElement("li", null, "Tyler"),
    React.createElement("li", null, "Karen"),
    React.createElement("li", null, "Richard")
);
*/

const people = [
    { name: "Tyler" }, 
    { name: "Karen" }, 
    { name: "Richard" }
];

const element = React.createElement(
    "ol",
    null,
    people.map((person) =>
      React.createElement("li", { key: person.name }, person.name)
    )
);
//nothing loads until we call the render funtion
ReactDOM.render(element, document.getElementById("root"));