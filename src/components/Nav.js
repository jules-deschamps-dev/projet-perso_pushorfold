import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [printNav, setPrintNav] = useState(false);

  function handleNav() {
    if (printNav) {
      document.getElementById("hyphen-top").style.transform = "inherit";
      document.getElementById("hyphen-bottom").style.transform = "inherit";
      document.getElementById("hyphen-middle").style.width = "inherit";
      setPrintNav(false);
    } else if (window.innerWidth > 768) {
      document.getElementById("hyphen-top").style.transform =
        "rotate(-45deg) translate(-11px, 11.5px)";
      document.getElementById("hyphen-bottom").style.transform =
        "rotate(45deg)  translate(-10px, -11px)";
      document.getElementById("hyphen-middle").style.width = "0px";
      setPrintNav(true);
    } else if (window.innerWidth < 768) {
      document.getElementById("hyphen-top").style.transform =
        "rotate(45deg) translate(2px, 3.5px)";
      document.getElementById("hyphen-bottom").style.transform =
        "rotate(-45deg)  translate(5px, -7px)";
      setPrintNav(true);
    }
  }

  return (
    <nav>
      <div className="burger" onClick={() => handleNav()}>
        <div id="hyphen-top" className="hyphen"></div>
        <div id="hyphen-middle" className="hyphen"></div>
        <div id="hyphen-bottom" className="hyphen"></div>
      </div>

      {printNav ? (
        <div id="nav-links-list">
          <Link to="/">
            <div className="front-face">
              <img src="../../../img/icons/house.svg" />
            </div>
            <div className="bottom-face">Home</div>
          </Link>

          <Link to="/about">
            <div className="front-face">
              <img src="../../../img/icons/circle-info.svg" />
            </div>
            <div className="bottom-face">About</div>
          </Link>

          <Link to="/tips">
            <div className="front-face">
              <img src="../../../img/icons/bitcoin.svg" />
            </div>
            <div className="bottom-face">Tips</div>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Nav;
