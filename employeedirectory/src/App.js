import React, { useEffect, useState } from "react";
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Nav from './components/Nav';
import API from './Utils/API'


function App (){

  const [employeeState, setEmployeeState] = useState([]);

  useEffect(function () {
    API.search().then((result) => {
      console.log(result.data.results);
      setEmployeeState(result.data.results);
      console.log(employeeState)
    });
  }, []);
 
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ sorted, setSorted] = useState(false);
  const [ data, setEmployees ] = useState([]);
  

  
  function handleSearchTerm(event)  {
    setSearchTerm(event.target.value)
  }

  function handleSortByName() {
    if (!sorted) {
        setEmployees(employeeState.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
        setSorted(true);
    } else {
        setEmployees(employeeState.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
        setSorted(false);
    }
  }


  


  return (
    
    <Wrapper>
      <Nav 
      handleSearchTerm={handleSearchTerm}
      searchTerm={searchTerm}
      handleSortByName={handleSortByName}
      />
      <Header />
      <Card 
      searchTerm={searchTerm}
      employees={employeeState}/>
    </Wrapper>
      
    );
  
}

export default App;