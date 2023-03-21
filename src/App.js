import React, {useState, useEffect } from 'react';
import './App.css';
import { FetchStarShip } from './services/sw-api';
function App() {
  const [starship, setStarship] = useState([]);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {

      const ships = async () => {const data = FetchStarShip();  
        console.log(ships);
      }
      })
      return (
        <div className="App">
      <h1>Star Wars Ships</h1>
      {this.ships.map((ship) => {
        <div className='card'>{ship.name}</div>
      })}
    </div>
  );
}

export default App;
