import { Link, useOutletContext } from "react-router-dom"


export default function Cards () {
    let {cards, setCards} = useOutletContext();
    
    return (
        <>
        <h1>Cards</h1>
        {cards.map((card, i) =>(
            <div className="card-container" key={i}> 
                <div className="card-number">{card.cardNumber}</div>
                <div className="card-name">CARDHOLDER NAME: {card.cardName}</div>
                <div className="card-expiration">Valid Thru: {card.expiration}</div>
                <div className="card-ccv">CCV: {card.ccv}</div>
                <div className="card-vendor">{card.vendor}</div>
            </div>
        ))}
        <button>
            <Link to="/addcard">Add a new Card</Link>
        </button>
        </>
        
        
    )
}
