import React from "react";
import "./style.css";

function Card({name, picture, email}) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={name} src={picture} />
            </div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
}

export default Card;