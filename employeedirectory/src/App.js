import React, { useEffect, useState } from "react";
import API from "./API.js";
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';


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
  };
  console.log(employeeState) 
  
  
  return (
    
    <Wrapper>
      <Header />
      <Card />
    </Wrapper>
      
    );
  
}

export default App;