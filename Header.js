import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="headerContainer">
            <img alt="Logo" src="./logo.png" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="contact">Contact Us</Link></li>
            </ul>
        </div>
    );
};

export default Header;