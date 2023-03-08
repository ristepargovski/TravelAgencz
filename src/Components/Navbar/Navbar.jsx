import React, {useState, useEffect, useReducer} from "react";
import {Link, useNavigate} from "react-router-dom";
import NavbarReducer from "./NavbarReducer";
import initialState from "./NavbarReducer";
import "./navbar.css";
import About from "../About/About.jsx";

import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
import Contact from "../Contact/Contact";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
function NavBar({packagesRef}) {
  const [active, setActive] = useState("navBar");
  // const [showContact, setShowContact] = useState(false);
  // const [showAbout, setShowAbout] = useState(false);

  const [state, dispatch] = useReducer(NavbarReducer, initialState);
  const {showContact, showAbout} = state;

  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };
  const contactHandler = (event) => {
    event.preventDefault();
    // setShowContact(!showContact);
    // setShowAbout(false);
    dispatch({type: "contactHandler"});
  };
  const aboutHandler = (event) => {
    event.preventDefault();
    // setShowAbout(!showAbout);
    // setShowContact(false);
    dispatch({type: "aboutHandler"});
  };
  function packagesHandler(event) {
    event.preventDefault();
    // setShowContact(false);
    // setShowAbout(false);
    dispatch({type: "packagesHandler"});
    navigate("/");
    packagesRef.current.scrollIntoView({behavior: "smooth"});
  }

  function homeHandler() {
    // setShowContact(false);
    // setShowAbout(false);
    dispatch({type: "packagesHandler"});
    navigate("/");
  }

  function logoHandler() {
    // setShowContact(false);
    // setShowAbout(false);
    dispatch({type: "packagesHandler"});
    navigate("/");
  }

  function carrentalHandler() {
    // setShowContact(false);
    // setShowAbout(false);
    dispatch({type: "packagesHandler"});
    navigate("/");
  }
  return (
    <>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <li data-aos="fade-right">
              <a href="#" className="logo flex" onClick={logoHandler}>
                <h1>
                  <MdOutlineTravelExplore className="icon" />
                  Travel.Tly
                </h1>
              </a>
            </li>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink" onClick={homeHandler}>
                  Home
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink" onClick={packagesHandler}>
                  Packages
                </a>
              </li>
              <li className="navItem">
                <Link
                  to="/CarRental"
                  className="navLink"
                  onClick={carrentalHandler}
                >
                  Car Rental
                </Link>
              </li>
              <li className="navItem">
                <a href="#" onClick={aboutHandler} className="navLink">
                  About
                </a>
                {showAbout && (
                  <>
                    <About />
                  </>
                )}
              </li>

              <li className="navItem ">
                <a href="#" onClick={contactHandler} className="navLink">
                  Contact
                </a>
                {showContact && (
                  <>
                    <Contact />
                  </>
                )}
              </li>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
      ;
    </>
  );
}

export default NavBar;
