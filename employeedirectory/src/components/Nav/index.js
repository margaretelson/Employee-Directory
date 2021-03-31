import React, { useEffect, useState } from "react";
import "./style.css";

function Nav({ onSearch, searchTerm, handleSortByName }, props) { 
    function handleFormSubmit(event){
        event.preventDefault()
    }
    
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
                <button onClick={handleSortByName} className="namebtn">Filter Alphabetically!</button>
                
            </div>
            
        </div>
    )
}

export default Nav;