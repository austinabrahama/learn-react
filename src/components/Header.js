import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
        <div className="headerContainer">
            <img alt="Logo" src={LOGO_URL} />
            <ul>
                <li>About</li>
                <li>Home</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
};

export default Header;