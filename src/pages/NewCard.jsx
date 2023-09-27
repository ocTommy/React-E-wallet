import { Link, useOutletContext } from "react-router-dom"
import { useEffect, useState } from "react";



export default function NewCards() {

    const { cards, setCards } = useOutletContext();
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiration, setExpiration] = useState('');
    const [ccv, setCcv] = useState('');
    const [vendor, setVendor] = useState('Visa'); 
    
    const formattedExpiration = expiration.split('-').map(part => {
        if (part.length === 2) {
        
          return part;
        } else if (part.length === 4) {
         
          return part.slice(2);
        }
      }).join('/');

    const updateCardPreview = () => {
        const formattedCardPreview = `\nCard Number: ${cardNumber}\nCard Name:${cardName}\nValid Thru: ${formattedExpiration}\nCCV: ${ccv}\nVendor: ${vendor}`;
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
            expiration: formattedExpiration,
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

            <div className="input-container">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="number" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </div>

            <div className="input-container">
                <label htmlFor="cardName">Cardholder Name</label>
                <input type="text" id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} />
            </div>

            <div className="input-container">
                <label htmlFor="expiration">Valid Thru</label>
                <input type="month" id="expiration" value={expiration} onChange={(e) => setExpiration(e.target.value)} />   
            </div>

            <div className="input-container">
                <label htmlFor="ccv">CCV</label>
                <input type="number" id="ccv" value={ccv} onChange={(e) => setCcv(e.target.value)} />    
            </div>
            <div className="input-container">
                <label htmlFor="vendor">Vendor</label>
                <select id="vendor" value={vendor} onChange={(e) => setVendor(e.target.value)}>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="American Express">American Express</option>
                </select>   
            </div>

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