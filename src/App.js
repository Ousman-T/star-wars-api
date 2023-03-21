import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [starship, setStarship] = useState([]);
  const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        async function fetchStarShip(){
            let res = await fetch('https://swapi.dev/api/starships/?format=json')
            let data = res.json();
            // if doesn't work put data.results
            setStarship(data);
        }

        fetchStarShip();
        
    }, [])
    console.log(starship);
    
    return (
      <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
