import { Link, useOutletContext } from "react-router-dom"


export default function Cards () {
    let {cards, setCards} = useOutletContext();
    
    return (
        <>
        <h1>Cards</h1>
        {cards.map((card, i) =>(
            <div className="card-container" key={i}>
                <p>{card.cardNumber}</p>
                <p>{card.cardName}</p>
                <p>{card.expiration}</p>
                <p>{card.ccv}</p>
                <p>{card.vendor}</p>

            </div>
        ))}
        <button>
            <Link to="/addcard">Add a new Card</Link>
        </button>
        </>
        
        
    )
}
