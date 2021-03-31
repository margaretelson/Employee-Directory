import React, { useEffect, useState } from "react";
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Nav from './components/Nav'


function App (){
 
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ sorted, setSorted] = useState(false);
  const [ data, setEmployees ] = useState();
  

  
  function handleSearchTerm(event)  {
    setSearchTerm(event.target.value)
}

function handleSortByName() {
  // sort array ascending or descending by first name
  if (!sorted) {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
      setSorted(true);
  } else {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
      setSorted(false);
  }
}


  return (
    
    <Wrapper>
      <Nav 
      onSearch={handleSearchTerm}
      searchTerm={searchTerm}
      handleSortByName={handleSortByName}
      />
      <Header />
      <Card />
    </Wrapper>
      
    );
  
}

export default App;