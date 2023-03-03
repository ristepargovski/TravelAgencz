import React from "react";

import "./about.css";
import img from "../../Assets/img10.jpg";
import img1 from "../../Assets/img11.jpg";
import img2 from "../../Assets/img12.jpg";
import {Fragment} from "react";
function About() {
  return (
    <Fragment>
      <div className="backdrop"></div>
      <div className="section1">
        <div className="title">
          <h2>About Travel.Tly</h2>
          <h1>The Everybody Wins Travel Platform.</h1>
        </div>
      </div>
      <section className="section0">
        <div className="section2">
          <div className="text">
            <ul>
              <li className="naslov">
                <h1>Since 2015</h1>
              </li>
              <li className="tekst">
                <h1>
                  Started in 2018, Travel.Tly for Business has become one of the
                  world’s largest online booking tools for corporate travel.
                  Part of Travel.Tly, it’s Travel.Tly for Business’ mission to
                  help businesses reduce their travel spend by providing
                  enterprise-grade travel management software at no cost and
                  offer one of the widest selections of travel options in the
                  world at highly competitive rates.
                </h1>
              </li>
            </ul>
          </div>
          <div className="slika1">
            <img src={img} alt="teamwork" />
          </div>
        </div>
        <div className="section2">
          <div className="slika1">
            <img src={img1} />
          </div>

          <div className="textdesno">
            <ul>
              <li className="naslov naslovdesno">
                <h1>Complete business travel</h1>
              </li>
              <li className="tekstdesno">
                <h1>
                  By bringing together all elements of the business trip,
                  Travel.Tly for Business aims to make it easier for companies
                  to book, manage and report on everything related to business
                  travel. A highly intuitive interface allows travel bookers to
                  book the entire trip in one single booking.
                </h1>
              </li>
            </ul>
          </div>
        </div>
        <div className="section2">
          <div className="text">
            <ul>
              <li className="naslov">
                <h1>What’s coming</h1>
              </li>
              <li className="tekst">
                <h1>
                  Today, Travel.Tly for Business offers flights, accommodation
                  and car rental. This will soon be extended with airport taxis,
                  the ability to book train tickets, reserve your table at a
                  restaurant and much more.
                </h1>
              </li>
            </ul>
          </div>
          <div className="slika1">
            <img src={img2} alt="teamwork" />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
