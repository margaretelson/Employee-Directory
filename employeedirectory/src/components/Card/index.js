import React, { useState, useEffect } from "react";
import "./style.css";
import App from "../.././App";
import API from "../../Utils/API";

<App />;

function Card(props) {


  return props.employees.map((employee) => (
    <div className="card">
      <div className="img-container">
        <img id="pic" alt={employee.name.first} src={employee.picture.large}/>
        <p id="info"> {employee.name.first} {employee.name.last} </p>
        <p id="email">{employee.email}</p>
      </div>
      
    </div>
  ));
}

export default Card;
