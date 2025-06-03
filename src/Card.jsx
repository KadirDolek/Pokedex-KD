import './card.css'

export default function Card({poke}){

    return(
    <div className="card">
        <img src={poke.image} alt="" />
    </div>

    )
}