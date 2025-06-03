import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Info from './Info';
import char from './assets/charnieres.png'
import PokedexT from './assets/pokedex.png'
import backgroundImage from './assets/bg-herb.png';



export default function Pokedex(){
const [data,setData] = useState([]);
const [recherche, setRecherche] = useState("");
const clapetRef = useRef(null);

  useEffect(() => {
    if (clapetRef.current) {
      clapetRef.current.classList.add('#clapet img');
    }

    axios.get('https://pokebuildapi.fr/api/v1/pokemon')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);


 const listeFiltre = data.filter((pokemon) => {
   return pokemon.name.toLowerCase().includes(recherche.toLowerCase()) 
 });

    return(
    <div id="pokedex">
      <div id='clapet'>
        <img src={PokedexT} id='pokedexx' alt="" />
        <img id='ecrou' src={char} alt="" />
        <img id='ecrou1' src={char} alt="" />
      </div>
          <div id='ecran' style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat'}}>
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
            <div id="template">
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