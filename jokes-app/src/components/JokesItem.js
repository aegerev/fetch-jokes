import React from "react";
iimport "../App.css";

function JokesItem(props) {
    return <li className="jokesItemWrapper">{props.text}</li>;
}
export default JokesItem;
