import React, { useEffect, useState } from "react";
import API from "./API.js";
import Card from './components/Card';

function App (){
  const [employeeState, setemployeeState] = useState([])

  useEffect(function(){
    API.search().then((result) => {
      console.log(result.data.results)
      setemployeeState(result.data.results)
    }
  )
  },[])

  const removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    //this.setState({ friends });
  };

  console.log(employeeState)  
  return (
      <div>
      <Card 
      name={employee.name}/>
       {employeeState.map(employee => (
       <p>{employee.name.first} {employee.name.last} / {employee.email} </p>
       ))}       
      </div>
    );
  
}

export default App;
