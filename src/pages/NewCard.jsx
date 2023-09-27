import { Link, useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react";



export default function NewCards() {
    const { cards, setCards } = useOutletContext();
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiration, setExpiration] = useState('');
    const [ccv, setCcv] = useState('');
    const [vendor, setVendor] = useState('Visa'); 


    const updateCardPreview = () => {
        const formattedCardPreview = `\nCard Number: ${cardNumber}\nCard Name:${cardName}\nValid Thru: ${expiration}\nCCV: ${ccv}\nVendor: ${vendor}`;
        setCardPreview(formattedCardPreview);
    };

    
    const [cardPreview, setCardPreview] = useState('');

    useEffect(() => {
        updateCardPreview();
    }, [cardNumber, cardName, expiration, ccv, vendor]);

    const addCard = () => {
        const newCard = {
            cardNumber,
            cardName,
            expiration,
            ccv,
            vendor,
        };

        const newCards = [...cards, newCard];
        setCards(newCards);
    };

    return (
        <>
            <h1>Add a new card</h1>
            
            <div className="card-preview">
                <h3>Card Preview</h3>
                <pre>{cardPreview}</pre>
            </div>

            <label htmlFor="cardNumber">Card Number</label>
            <input type="number" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <br />
            <label htmlFor="cardName">Cardholder Name</label>
            <input type="text" id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} />
            <br />
            <label htmlFor="expiration">Valid Thru</label>
            <input type="month" id="expiration" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
            <br />
            <label htmlFor="ccv">CCV</label>
            <input type="number" id="ccv" value={ccv} onChange={(e) => setCcv(e.target.value)} />
            <br />
            <label htmlFor="vendor">Vendor</label>
            <select id="vendor" value={vendor} onChange={(e) => setVendor(e.target.value)}>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="American Express">American Express</option>
            </select>
            <br />
            <button onClick={addCard}>
                Add Card
            </button>
            <br />
            <button>
                <Link to="/">Cards</Link>
            </button>
        </>
    );
}