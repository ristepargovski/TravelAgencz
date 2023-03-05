import React, {useRef, useState} from "react";
import "./contact.css";
import {GoArrowRight} from "react-icons/go";
import {RiErrorWarningFill} from "react-icons/ri";
function Contact() {
  const [nameError, SetNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [emptyName, setEmptyName] = useState("");
  const [emptyEmail, setEmptyEmail] = useState("");
  const [emptySubject, setEmptySubject] = useState("");
  const [emptyMessage, setEmptyMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [successName, setSuccessName] = useState(false);
  const [successEmail, setSuccessEmail] = useState(false);
  const [successSubject, setSuccessSubject] = useState(false);

  const nameref = useRef();
  const emailref = useRef();
  const subjectref = useRef();
  const messageref = useRef();

  function buttonHandler() {
    const nameRefRdy = nameref.current.value;
    const emailRefRdy = emailref.current.value;
    const subjectRefRdy = subjectref.current.value;
    const messageRefRdy = messageref.current.value;
    if (nameRefRdy.length === 0) {
      SetNameError("Please enter your name.\n");
    }
    if (emailRefRdy.length === 0) {
      setEmailError("Please enter your email address.\n");
    }
    if (subjectRefRdy.length === 0) {
      setSubjectError("Please enter a subject.\n");
    }
    if (messageRefRdy.length === 0) {
      setMessageError("Please enter a message.\n");
    } else {
      fetch(
        "https://travelagency-78872-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: nameRefRdy,
            email: emailRefRdy,
            subject: subjectRefRdy,
            message: messageRefRdy,
          }),
          headers: {
            "Contect-Type": "application/json",
          },
        }
      ).then((res) => {
        if (
          res.ok ||
          successMessage === false ||
          successName === false ||
          successEmail === false ||
          successSubject === false
        ) {
          setSuccessMessage(true);
          setSuccessName(true);
          setSuccessEmail(true);
          setSuccessSubject(true);
        } else {
          setSuccessMessage(false);
        }
      });

      setEmptyName("");
      setEmptyEmail("");
      setEmptySubject("");
      setEmptyMessage("");
    }
  }

  return (
    <div className="backdrop">
      <section className="section-cela">
        <div className="divtitle">
          Send an Email for all your questions and requests.
        </div>
        <div className="divname">
          <h1 className="h1name">
            Name <GoArrowRight className="arrowicon" />
          </h1>
          <input
            className="inputname"
            placeholder="Your name"
            ref={nameref}
            value={emptyName}
            onChange={(e) => {
              setEmptyName(e.target.value);
              nameref.current.value = e.target.value;
              if (e.target.value.length === 0) {
                nameref.current.style.borderColor = "red";
                SetNameError("Please enter your name.\n");
              } else {
                nameref.current.style.borderColor = "black";
                setSuccessName(false);
                SetNameError("");
              }
            }}
          />
        </div>
        <div className="divname">
          <h1 className="h1name">
            Email <GoArrowRight className="arrowicon" />
          </h1>
          <input
            className="inputemail"
            placeholder="Your email"
            ref={emailref}
            value={emptyEmail}
            onChange={(e) => {
              setEmptyEmail(e.target.value);
              emailref.current.value = e.target.value;
              if (e.target.value.length === 0) {
                emailref.current.style.borderColor = "red";
              } else {
                emailref.current.style.borderColor = "black";
                setSuccessEmail(false);
                setEmailError("");
              }
            }}
          />
        </div>
        <div className="divname">
          <h1 className="h1name">
            Subject <GoArrowRight className="arrowicon" />
          </h1>
          <input
            className="inputsubject"
            placeholder="Subject"
            ref={subjectref}
            value={emptySubject}
            onChange={(e) => {
              setEmptySubject(e.target.value);
              subjectref.current.value = e.target.value;
              if (e.target.value.length === 0) {
                subjectref.current.style.borderColor = "red";
              } else {
                subjectref.current.style.borderColor = "black";
                setSuccessSubject(false);
                setSubjectError("");
              }
            }}
          />
        </div>
        <div className="divname">
          <h1 className="h1name">
            Message <GoArrowRight className="arrowicon" />
          </h1>
          <input
            className="inputmessage"
            placeholder="Your message"
            ref={messageref}
            value={emptyMessage}
            onChange={(e) => {
              setEmptyMessage(e.target.value);
              messageref.current.value = e.target.value;
              if (e.target.value.length === 0) {
                messageref.current.style.borderColor = "red";
              } else {
                messageref.current.style.borderColor = "black";
                setSuccessMessage(false);
                setMessageError("");
              }
            }}
          />
        </div>
        {!successMessage ? (
          <button className="btn" onClick={buttonHandler}>
            Send Email
          </button>
        ) : (
          <button className="btng" onClick={buttonHandler}>
            Successfully Sent
          </button>
        )}

        <div className="errorMessageDiv">
          <p className="errormessage">
            {nameError && <RiErrorWarningFill className="iconError" />}
            {nameError}
          </p>
          <p className="errormessage">
            {emailError && <RiErrorWarningFill className="iconError" />}
            {emailError}
          </p>
          <p className="errormessage">
            {subjectError && <RiErrorWarningFill className="iconError" />}
            {subjectError}
          </p>
          <p className="errormessage">
            {messageError && <RiErrorWarningFill className="iconError" />}
            {messageError}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
