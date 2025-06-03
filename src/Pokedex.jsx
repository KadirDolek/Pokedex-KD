import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Info from './Info';

export default function Pokedex(){
 const [data,setData] = useState([]);
 const [recherche, setRecherche] = useState("");

 useEffect(()=>{
    axios.get('https://pokebuildapi.fr/api/v1/pokemon')
    .then((response)=>setData(response.data))
    .catch((error)=>console.log(error));
 },[])

 const listeFiltre = data.filter((pokemon) => {
   return pokemon.name.toLowerCase().includes(recherche.toLowerCase()) 
 });

    return(
    <div id="pokedex">
          <div id='ecran'>
            <div id='nom'>
              <input 
                type="text" 
                name="" 
                id="nom" 
                placeholder="Recherchez ici"
                style={{border:'none' , color:'black', fontSize:'30px'}}
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)} />
            </div>
            <div id='template'>
                <Info/>
            </div>
          </div>
          <div id='liste' className='scroll-liste'>
          {listeFiltre.map((item)=>(
            <div key={item.id}> 
              <NavLink to={`/${item.id}`}>
                <button 
                style={{width:'140px', 
                background:'transparent', 
                cursor:'pointer',
                borderRadius:'10px'}}>{item.pokedexId}&nbsp;&nbsp;{item.name}</button>
              </NavLink>
            </div>
          ))}
          </div>
        </div>
    )
}