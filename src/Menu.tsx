import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu-wrapper">
            <h1 className="jura-regular">Menu</h1>
          <Link to={'/'} className="menu-item">Home</Link>
          <Link to={'/about'} className="menu-item">About</Link>
        </div>
    )
}
