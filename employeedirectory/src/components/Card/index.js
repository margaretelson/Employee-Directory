import React from "react";
import App from "App.js";
import "./style.css";

function Card(employee) {
    return (

        <div className="card">
            <div><img alt={employee.last} src={employee.image}></img></div>
            <div>{employee.title} {employee.first} {employee.last} </div>
            <div>{employee.email}</div>
        </div>
    );
}

export default Card;