import Card from './Card'
import './card.css'

export default function List({poke}){
   
console.log(poke)
    return(
       <div className="list">
       {poke ? poke.map( element => (

           <Card key={element.id} poke={element} />
   
       )): ""}
       </div> 

    );
}