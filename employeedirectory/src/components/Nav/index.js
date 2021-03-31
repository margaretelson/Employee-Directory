import React from "react";
import "./style.css";

function Nav({ onSearch, searchTerm, handleSortByName }) { 
    return (
        <div className="navbar">
            <form >
                <input
                    value={searchTerm} 
                    onChange={onSearch} 
                    className="form"
                    type="text"
                    placeholder="search employee"/>
            </form>
            <div className="buttons">
                <button onClick={handleSortByName} className="namebtn">Name</button>
            </div>
            
        </div>
    )
}

export default Nav;