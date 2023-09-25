import { Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/addCard">Add Card</Link>
            </li>
        </ul>
        </>
    )
}