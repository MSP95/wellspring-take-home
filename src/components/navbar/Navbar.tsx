import Logo from "../../assets/logo.svg";
import HeartHandActive from "../../assets/heart-hand-active.svg";
import HeartHand from "../../assets/heart-hand.svg";
import HomeLineActive from "../../assets/home-line-active.svg";
import HomeLine from "../../assets/home-line.svg";
import { NavLink } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={Logo} alt="logo" />
      <ul>
        <li>
          <NavLink
            className="link"
            to="/"
            children={({ isActive }) => (
              <div className="link-content">
                <img
                  className="nav-icon"
                  src={isActive ? HomeLineActive : HomeLine}
                  alt="home-icon"
                />{" "}
                Home
              </div>
            )}
          />
        </li>
        <li>
          <NavLink
            className="link"
            to="/patients"
            children={({ isActive }) => (
              <div className="link-content">
                <img
                  className="nav-icon"
                  src={isActive ? HeartHandActive : HeartHand}
                  alt="home-icon"
                />{" "}
                Patients
              </div>
            )}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
