import React, { useState } from "react";
import "../navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div
      className="homecontainer"
      style={{ backgroundImage: "url(/img/banner.jpg)" }}
    >
      <div className="homecontent">
        <div className="navbarsection">
          <nav className="nav">
            <a href="#" className="nav__brand">
              <img src="/img/logo.png" alt="" />
            </a>
            <ul className={active}>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Banking
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Borrowing
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Investment
                </a>
              </li>

              <li className="nav__item">
                <a href="#" className="nav__link">
                  Insurance
                </a>
              </li>

              <li className="nav__item">
                <button>Login</button>
              </li>
            </ul>
            <div onClick={navToggle} className={icon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
        </div>
        <div className="bannerinformation">
          <div className="informationconetnt">
            <h2>
              Looking out for you and your family, wherever life takes you.
            </h2>
            <p>
              At PNFP Banking, we offer the accounts, services, technology, and
              personal financial guidance that help you manage your money, your
              way. Welcome.
            </p>

            <button>Learn About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
