import React, {useEffect, useState} from "react";
import {useRef} from "react";
import "./main.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";
import img11 from "../../Assets/img11.jpg";
import img12 from "../../Assets/img12.jpg";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BsClipboardCheck} from "react-icons/bs";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
// const Data = [
//   {
//     id: 1,
//     imgSrc: img,
//     destTitle: "Bora Bora",
//     location: "New Zealand",
//     grade: "CULTURAL RELAX",
//     fees: "700$",
//     description:
//       "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
//   },

//   {
//     id: 2,
//     imgSrc: img2,
//     destTitle: "Machu Picchu",
//     location: "Peru",
//     grade: "CULTURAL RELAX",
//     fees: "$600",
//     description:
//       "Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.",
//   },
//   {
//     id: 3,
//     imgSrc: img3,
//     destTitle: "Great Barrier Reef",
//     location: "Australia",
//     grade: "CULTURAL RELAX",
//     fees: "$700",
//     description:
//       "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place",
//   },
//   {
//     id: 4,
//     imgSrc: img4,
//     destTitle: "Cappadocia",
//     location: "Turkey",
//     grade: "CULTURAL RELAX",
//     fees: "$800",
//     description:
//       "According to the World Tourism Ranking, 45 Milions people visit Turkey each year, and from that about 2 Milions come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.",
//   },
//   {
//     id: 5,
//     imgSrc: img5,
//     destTitle: "Guanajuato",
//     location: "Mexico",
//     grade: "CULTURAL RELAX",
//     fees: "$1100",
//     description:
//       "A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors avaiable. Always welcome.",
//   },
//   {
//     id: 6,
//     imgSrc: img6,
//     destTitle: "Cinque Terre",
//     location: "Italy",
//     grade: "CULTURAL RELAX",
//     fees: "$840",
//     description:
//       "The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choise you are about to get here. Happy exploring great Food!",
//   },
//   {
//     id: 7,
//     imgSrc: img7,
//     destTitle: "Angkor Wat",
//     location: "Cambodia",
//     grade: "CULTURAL RELAX",
//     fees: "$790",
//     description:
//       "Angkor wat represent the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.",
//   },
//   {
//     id: 8,
//     imgSrc: img8,
//     destTitle: "Taj Mahal",
//     location: "India",
//     grade: "CULTURAL RELAX",
//     fees: "$900",
//     description:
//       "An immense mausoleum of white marble, built-in Agra by Mughal emperror Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.",
//   },
//   {
//     id: 9,
//     imgSrc: img9,
//     destTitle: "Bali Island",
//     location: "Indonesia",
//     grade: "CULTURAL RELAX",
//     fees: "$500",
//     description:
//       "Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.",
//   },
// ];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data.forEach((destination) => {
//   fetch(
//     "https://travelagency-78872-default-rtdb.firebaseio.com/MainDestinations.json",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         id: destination.id,
//         imgSrc: destination.imgSrc,
//         destTitle: destination.destTitle,
//         location: destination.location,
//         grade: destination.grade,
//         fees: destination.fees,
//         description: destination.description,
//       }),
//     }
//   )
//     .then((response) => {
//       console.log(
//         `Data for destination ${destination.id} has been stored in Firebase`
//       );
//     })
//     .catch((error) => {
//       console.error(
//         `Error storing data for car ${destination.id} in Firebase: ${error}`
//       );
//     });
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              fetch destinacii

const Main = ({packagesRef}) => {
  const [Destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const [loading, setLoading] = useState(true);
  const [carRentals, setCarRentals] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const today = new Date();
  const tomorrow = new Date();
  const maxDate = new Date(startDate);
  maxDate.setDate(startDate.getDate() + 13);
  tomorrow.setDate(today.getDate() + 1);

  const [selectedDestinationFees, setSelectedDestinationFees] = useState(null);
  const [selectedCarFees, setSelectedCarFees] = useState(null);
  const [daysToCalculate, setDaysToCalculate] = useState();
  const [selectedCarIdPrice, setSelectedCarIdPrice] = useState();
  const [wholePrice, setWholePrice] = useState(null);

  const selectedCarIDRef = useRef(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      const databaseUrl =
        "https://travelagency-78872-default-rtdb.firebaseio.com";

      const pathToDestinations = "/MainDestinations";

      try {
        const response = await fetch(
          `${databaseUrl}${pathToDestinations}.json`
        );
        const data = await response.json();
        const Destinations = Object.values(data);
        setDestinations(Destinations);

        setLoading(false);
      } catch (error) {}
    };

    fetchDestinations();
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // fetch koli

  useEffect(() => {
    const selectedDestinationObj = Destinations.find(
      ({id}) => id === selectedDestination
    );
    if (selectedDestinationObj) {
      setSelectedDestinationFees(selectedDestinationObj.fees);
    } else {
      setSelectedDestinationFees(null);
    }
  }, [selectedDestination]);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const selectedCarObj = carRentals.find(({id}) => id === selectedCarIdPrice);
    if (selectedCarObj) {
      setSelectedCarFees(selectedCarObj.pricePerDay);
    } else {
      setSelectedCarFees(null);
    }
  }, [selectedCarIdPrice]);

  useEffect(() => {
    const sumPrice = selectedCarFees * daysToCalculate;
    const priceDest = parseInt(selectedDestinationFees);
    let wholePriceConst = sumPrice + priceDest;
    if (wholePriceConst) {
      setWholePrice(wholePriceConst);
    } else {
      setWholePrice(null);
    }
  }, [selectedCarFees, daysToCalculate, selectedDestinationFees]);

  useEffect(() => {
    const fetchCarRentals = async () => {
      const databaseUrl =
        "https://travelagency-78872-default-rtdb.firebaseio.com";

      const pathToCarRentals = "/carrental";

      try {
        const response = await fetch(`${databaseUrl}${pathToCarRentals}.json`);
        const data = await response.json();
        const carRentals = Object.values(data);
        setCarRentals(carRentals);

        setLoading(false);
      } catch (error) {}
    };

    fetchCarRentals();
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const detailsButtonHandler = (id) => {
    setSelectedDestination(id);
  };

  const handleDateChange = (date, isStart) => {
    if (isStart) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const calculateNumberOfDays = () => {
    const oneDay = 1000 * 60 * 60 * 24; // number of milliseconds in a day
    const startDateMs = startDate ? startDate.getTime() : 0;
    const endDateMs = endDate ? endDate.getTime() : 0;
    const differenceInMs = endDateMs - startDateMs + oneDay; // difference in milliseconds, including both start and end dates
    const diffInDays = Math.ceil(differenceInMs / oneDay); // difference in days, rounded up
    setDaysToCalculate(diffInDays);

    if (diffInDays <= 0) {
      console.log("Please select valid start and end dates.");
      return;
    }
  };

  useEffect(() => {
    calculateNumberOfDays();
  }, [endDate]);

  const backdropHandler = (e) => {
    if (e.target === e.currentTarget) {
      // if the click target is the backdrop itself, set the selectedDestination state to null
      setSelectedDestination(null);
    }
  };

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  for (let i = carRentals.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [carRentals[i], carRentals[j]] = [carRentals[j], carRentals[i]];
  }

  const imgCarIDHandler = (id) => {
    selectedCarIDRef.current = id;

    setSelectedCarIdPrice(selectedCarIDRef.current);
  };

  return (
    <>
      {!loading ? (
        <section className="main container section">
          <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
              <div ref={packagesRef}>Most visited destinations</div>
            </h3>
          </div>

          <div className="secContent grid">
            {Destinations.map(
              ({id, imgSrc, destTitle, location, grade, fees, description}) => {
                return (
                  <div
                    key={id}
                    data-aos="fade-up"
                    className="singleDestination"
                  >
                    <div className="imageDiv">
                      <img src={imgSrc} alt={destTitle} />
                    </div>
                    <div className="cardInfo">
                      <h4 className="destTitle">{destTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                      </span>
                      <div className="fees flex">
                        <div className="grade">
                          <span>
                            {grade}
                            <small>+1</small>
                          </span>
                        </div>
                        <div className="price">
                          <h5>${fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description.substring(0, 180)}...</p>
                      </div>

                      <button
                        className="btn flex"
                        onClick={() => detailsButtonHandler(id)}
                      >
                        BOOK NOW
                        <BsClipboardCheck className="icon" />
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
      ) : (
        <div className="spinnerdestination">
          <LoadingSpinner />
        </div>
      )}
      {selectedDestination && (
        <div className="backdrop" onClick={backdropHandler}>
          <section className="main2 container">
            {Destinations.filter(({id}) => id === selectedDestination).map(
              ({id, imgSrc, destTitle, location, fees, description}) => {
                return (
                  <div
                    key={id}
                    data-aos="fade-up"
                    className="singleDestination2"
                  >
                    <div className="cardInfo2">
                      <h4 className="destTitle2">{destTitle}</h4>
                      <span className="continent2 flex">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                        <div className="price2">
                          <h5>Price: ${fees}</h5>
                        </div>
                      </span>

                      <div className="fees2 flex">
                        <div className="grade2">
                          <div className="desc2">
                            <p>{description}</p>
                          </div>
                        </div>

                        <div className="imageDiv2">
                          <img src={imgSrc} alt={destTitle} />
                          {/* /////////////////////////////////////////////////////////////////////////// */}
                          <section className="section3cars">
                            {carRentals.map(
                              ({id, img, nameCar, pricePerDay}) => (
                                <React.Fragment key={id}>
                                  <div
                                    className="idcardiv"
                                    data-aos="fade-up"
                                  ></div>
                                  <div className="pricecardiv">
                                    <h5>Price per day: ${pricePerDay}</h5>
                                  </div>
                                  <img
                                    className="slika111"
                                    src={img}
                                    onClick={() => imgCarIDHandler(id)}
                                  />
                                  <div className="namecardiv">
                                    <h4 className="namecarh4">{nameCar}</h4>
                                  </div>
                                </React.Fragment>
                              )
                            )}
                          </section>
                        </div>
                      </div>
                      <div className="bottompriceall">
                        <div className="dateRangeContainer">
                          <div className="dateRange">
                            <h3>FROM:</h3>
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => {
                                handleDateChange(date, true);
                                calculateNumberOfDays();
                              }}
                              selectsStart
                              startDate={startDate}
                              endDate={endDate}
                              minDate={tomorrow}
                            />
                          </div>
                          <div className="dateRange">
                            <h3>TO:</h3>
                            <DatePicker
                              selected={endDate}
                              onChange={(date) => {
                                handleDateChange(date, false);
                              }}
                              selectsEnd
                              startDate={startDate}
                              endDate={endDate}
                              minDate={startDate}
                              maxDate={maxDate}
                              placeholderText="Select a date"
                            />
                          </div>
                        </div>

                        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                        <div className="destinacijacenacela">
                          {Destinations.filter(
                            ({id}) => id === selectedDestination
                          ).map(({destTitle, location, fees}) => (
                            <>
                              <div className="destinacija">
                                <p className="ime">{destTitle}</p>
                                <p className="lokacija">{location}</p>
                                <p className="cena">${fees}</p>
                              </div>
                              <div className="separator" />
                              {carRentals
                                .filter(({id}) => id === selectedCarIdPrice)
                                .map(({id, nameCar, pricePerDay}) => (
                                  <div className="destinacija">
                                    <p className="ime">{nameCar}</p>

                                    {daysToCalculate * pricePerDay > 0 ? (
                                      <p className="lokacija">
                                        For {daysToCalculate} days its: $
                                        {daysToCalculate * pricePerDay}
                                      </p>
                                    ) : null}
                                    <p className="cena">
                                      Price per day: ${pricePerDay}
                                    </p>
                                  </div>
                                ))}
                              <div className="separator" />
                              <div className="destinacija">
                                <p className="cena">
                                  Whole price is: $ {wholePrice}
                                </p>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>

                      <button
                        className="btn flex"
                        // onClick={() => selectedBookNowHandler()}
                      >
                        BOOK NOW
                        <BsClipboardCheck className="icon" />
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </section>
        </div>
      )}
      ;
    </>
  );
};

export default Main;
