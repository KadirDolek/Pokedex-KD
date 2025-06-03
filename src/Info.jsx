import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './Pokedex.css'


export default function Info() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${id}`) 
                .then((response) => setData(response.data))
                .catch((error) => console.log(error));
        }
    }, [id]);

    if (!data) {
        return <div style={{display:'flex', justifyContent:'center', marginTop:'66%'}}>Chargement...</div>;
    }

    return (
        <div style={{textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column', lineHeight:'3px'}}>
            <h3>{data.name}</h3>
            <img style={{scale:0.8}} src={data.image} alt={data.name} />
            <p>HP: {data.stats.HP}</p>
            <p>Attaque: {data.stats.attack}</p>
            <p>Défense: {data.stats.defense}</p>
            <p>Vitesse: {data.stats.speed}</p>
            <p>Attaque Spé :{data.stats.special_attack}</p>
            <p>Défense Spé :{data.stats.special_defense}</p>
            <p>Types: &nbsp;
                {/* Le champ apiTypes est un tableau d'objets, donc data.apiTypes.name ne fonctionne pas, car apiTypes n’est pas un objet unique mais une liste de types (ici "Poison" et "Plante"). */}
                    {data.apiTypes.map((type, index) => (
                    <span key={index}> 
                    {type.name}
                    <img style={{height:'30px', marginTop:'-20px', marginLeft:'10px'}}  src={type.image} alt="" />
                    </span>
                ))}
            </p>
        </div>
    );
}