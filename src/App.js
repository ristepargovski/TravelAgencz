import React, {useRef} from "react";
import "./app.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import NavBar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CarRental from "./Components/CarRental/Carrental";

const App = () => {
  const packagesRef = useRef(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/carrental"
          element={
            <>
              <NavBar packagesRef={packagesRef} />
              <CarRental />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <NavBar packagesRef={packagesRef} />
              <Home />
              <Main packagesRef={packagesRef} />

              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
