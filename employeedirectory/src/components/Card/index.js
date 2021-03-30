import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.picture} />
            </div>
            <div>{employee.title} {employee.first} {employee.last} </div>
            <div>{employee.email}</div>
        </div>
    );
}

export default Card;