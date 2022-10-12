import { useEffect, useState } from 'react';
import { getCuisines } from './api';
import './App.css';
import Cuisine from './components/Cuisine';

function App() {
  const [cuisine, setCuisine] = useState([])
  const [searchParam, setSearchParam] = useState('')

  useEffect(() => {
    if (searchParam.length>3) {
      getCuisines(searchParam).then(response=> {
        setCuisine(response.data.results)
      })
    }
  }, [searchParam])
  
  const searchParamChange = (event) => {
    setSearchParam(event.target.value)
  }

  return (
    <div style={{margin: '50px'}}>
      <label htmlFor="search-input">Search</label>
      <input id="search-input" onChange={searchParamChange}/>
      {cuisine.length === 0 ? null : <Cuisine title={cuisine[0]?.title} image={cuisine[0]?.image}/>}
    </div>
  );
}

export default App;
