import { Outlet } from "react-router-dom";
import { useState } from "react";


export default function Root () {
    const [cards, setCards] = useState([
        {
            cardNumber: 1234123412341234,
            cardName: "Tommy",
            expiration: "12/24",
            ccv: 123,
            vendor: "Visa",
        },
        {
            cardNumber: 1234123412341234,
            cardName: "Abra",
            expiration: "10/22",
            ccv: 911,
            vendor: "Visa",
        }
    ]);

    return (
        <div>
            <Outlet context={{cards, setCards}}/>
        </div>
    )
}