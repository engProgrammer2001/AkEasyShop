import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/01.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggel, setSocialToggel] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // Add Event listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <>
      <header
        className={`header-section style-4 ${
          headerFixed ? "headerFixed fadeInUp" : ""
        }`}
      >
        {/* header top section start */}
        <div className={`header-top d-md-none ${socialToggel ? "open" : ""}`}>
          <div className="container">
            <div className="header-top-area">
              <Link to={"/signup"} className="lab-btn me-3">
                <span>Create Account</span>
              </Link>
              <Link to={"/signup"} className="">
                <span>Log In</span>
              </Link>
            </div>
          </div>
        </div>
        {/* header bottom start  */}
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              {/* logo */}
              <div className="logo-search-acte">
                <div className="logo" width="20px">
                  <Link to={"/"}>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              {/* menu area  */}
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                      <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
                {/* Sign in and log in button  */}
                <Link
                  to={"/sign-up"}
                  className="lab-btn me-3 d-none d-md-block"
                >
                  Create Account
                </Link>
                <Link to={"/login"} className="d-none d-md-block">
                  Log In
                </Link>

                {/* menu toggler  */}
                <div
                  onClick={() => setMenuToggle(!menuToggle)}
                  className={`header-bar d-lg-none ${
                    menuToggle ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {/* Social Toggler  */}
                <div
                  onClick={() => setSocialToggel(!socialToggel)}
                  className="ellepsis-bar d-md-none"
                >
                  <i className="icofont-info-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavItems;
