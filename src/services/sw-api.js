import { useEffect, useState } from "react";


export async function FetchStarShip(){
    const [ship, setShip] = useState();
    useEffect(() => {
        const fetchData = async () => {

            
             fetch('https://swapi.dev/api/starships/?format=json').then(
                data => (data.json()).then(result => {setShip(result.results)})
            )
            // let data = res.json();
            // if doesn't work put data.results
            // console.log(data.results);
            // setShip(data)
        }
        fetchData();
        
        }

    , [])
    return ship;
}


    
    
    