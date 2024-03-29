import React, {useEffect, useRef, useState} from "react";
import "./footer.css";
import video2 from "../../Assets/vtorovideo.mp4";
import {FiSend} from "react-icons/fi";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";
import {FiChevronRight} from "react-icons/fi";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
function Footer() {
  const emailInput = useRef("");
  const [email, setEmail] = useState("");

  const sendButtonHandler = () => {
    const emailRef = emailInput.current.value;
    console.log(emailRef);

    fetch("https://travelagency-78872-default-rtdb.firebaseio.com/email.json", {
      method: "POST",
      body: JSON.stringify({
        email: emailRef,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setEmail("");
  };

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Adress"
              ref={emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              data-aos="fade-up"
              className="btn flex"
              type="submit"
              onClick={sendButtonHandler}
            >
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon " /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Started in 2018, Travel.Tly for Business has become one of the
              world’s largest online booking tools for corporate travel. Part of
              Travel.Tly, it’s Travel.Tly for Business’ mission to help
              businesses reduce their travel spend by providing enterprise-grade
              travel management software at no cost and offer one of the widest
              selections of travel options in the world at highly competitive
              rates.
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* prva grupa */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* vtora grupa */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* treta grupa */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THERE</small>
            <small>COPYRIGHTS RESERVED - RPTRAVEL 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
