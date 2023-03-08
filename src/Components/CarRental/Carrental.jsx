import React, {useEffect, useState} from "react";
import "./carrental.css";
import img1 from "../../Assets/sliki/2017-Opel Zafira-8.png";
import img2 from "../../Assets/sliki/audi q5 2015 s line.png";
import img3 from "../../Assets/sliki/hyndai i10.png";
import img4 from "../../Assets/sliki/mazda cx-5 2.5 turbo 2022.webp";
import img5 from "../../Assets/sliki/mercedes c220d 4amatic 2020.png";
import img6 from "../../Assets/sliki/nissan kaškai.png";
import img7 from "../../Assets/sliki/opel astra 1.4cc.png";
import img8 from "../../Assets/sliki/opel corsa 12500cc.png";
import img9 from "../../Assets/sliki/toyota aygo 1.1 VVT-i 2018.png";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import {BsFillPersonCheckFill} from "react-icons/bs";
import {BsFillBagCheckFill} from "react-icons/bs";

// const Data = [
//   {
//     id: 1,
//     imgSrc: img1,
//     nameCar: "Opel Zafira",
//     pricePerDay: "25",
//     seats: "6-7",
//     bags: "4 bags",
//     description:
//       "The Zafira Tourer 2017 model is a MPV car manufactured by Opel, with 5 doors and 5-7 seats, with a fuel consumption of 7.3 litres/100km and 0 to 100 km/h (62mph) in 11.8 seconds,a maximum top speed of 118 km/h  (118 mph). A curb weight of 3779 lbs (1714 kgs). The Zafira Tourer 2017 1.6 Turbo 136HP. ",
//   },

//   {
//     id: 2,
//     imgSrc: img2,
//     nameCar: "AUDI Q5 S Line",
//     pricePerDay: "57",
//     seats: "4-5",
//     bags: "4 bags",
//     description:
//       "The Audi Q5 S Line 2015 is a luxury mid-size SUV with 5 doors and seating for 5. It has a 2.0-liter 4-cylinder TFSI engine producing 220 hp, can reach 0-100 km/h in 7.1 seconds, and has a top speed of 225 km/h. With the S Line package, it offers a sportier exterior and improved driving dynamics.",
//   },

//   {
//     id: 3,
//     imgSrc: img3,
//     nameCar: "Hyundai i10",
//     pricePerDay: "13",
//     seats: "4-5",
//     bags: "2 bags",
//     description:
//       "The Hyundai i10 is a subcompact hatchback with 5 doors and seating for up to 5 passengers. Its 1.2-liter 4-cylinder engine produces 87 hp and can accelerate from 0-60 mph in 12.6 seconds, with a top speed of 109 mph. The i10 is known for its compact size, good fuel efficiency, and affordable price.",
//   },

//   {
//     id: 4,
//     imgSrc: img4,
//     nameCar: "Mazda Cx-5 2.5 Turbo",
//     pricePerDay: "24",
//     seats: "4-5",
//     bags: "4 bags",
//     description:
//       "The Mazda CX-5 2.5 Turbo 2022 is a compact SUV with a 2.5-liter 4-cylinder turbocharged engine producing 250 hp, 0-60 mph in 6.2 seconds, and top speed of 130 mph. It has 5 doors, seats 5, a premium interior, advanced safety features, and intuitive infotainment system.",
//   },
//   {
//     id: 5,
//     imgSrc: img5,
//     nameCar: "Mercedes C220D 4 aMatic",
//     pricePerDay: "36",
//     seats: "4-5",
//     bags: "3 bags",
//     description:
//       "The Mercedes C220d 4MATIC 2020 is a compact luxury sedan with 4 doors and seating for 5 passengers. It has a 2.0-liter 4-cylinder diesel engine producing 194 hp, can accelerate from 0-60 mph in 7.1 seconds, and has a top speed of 149 mph. It features advanced safety technologies and the 4MATIC all-wheel drive system.",
//   },

//   {
//     id: 6,
//     imgSrc: img6,
//     nameCar: "Nissan Qashqai",
//     pricePerDay: "16",
//     seats: "4-5",
//     bags: "3 bags",
//     description:
//       "The Nissan Qashqai is a compact crossover SUV with 5 doors and 5 seats. It has a top speed of 188 km/h and can reach 0 to 100 km/h in 9.9-11.5 seconds, depending on the engine. The 2022 model boasts advanced tech and a modern design.",
//   },
//   {
//     id: 7,
//     imgSrc: img7,
//     nameCar: "Opel Astra 1.4",
//     pricePerDay: "10",
//     seats: "4-5",
//     bags: "3 bags",
//     description:
//       "The Opel Astra 1.4cc is a compact car with a 1.4-liter engine. It has 5 doors and can seat up to 5 people. Its fuel consumption ranges from 5.5 to 6.4 litres/100km, depending on the model. The Astra is known for its stylish design, comfort, and reliability.",
//   },
//   {
//     id: 8,
//     imgSrc: img8,
//     nameCar: "Opel Corsa",
//     pricePerDay: "10",
//     seats: "4-5",
//     bags: "2 bags",
//     description:
//       "The Opel Corsa is a subcompact car known for its efficiency, practicality, and affordability. It has 3-5 doors and can seat up to 5 people. The latest model features a range of advanced safety and connectivity technologies, as well as an electric version with a driving range of up to 330 km.",
//   },

//   {
//     id: 9,
//     imgSrc: img9,
//     nameCar: "Toyota Aygo 1.1 VVT-i ",
//     pricePerDay: "9",
//     seats: "3-4",
//     bags: "2 bags",
//     description:
//       "The Toyota Aygo 1.1 VVT-i 2018 is a compact city car with a 1.0-liter engine. It has 3-5 doors and can seat up to 4 people. Its fuel consumption is around 4.1-4.4 litres/100km, and it emits low CO2 emissions. The Aygo is known for its maneuverability, efficiency, and fun design.",
//   },
// ];

function Carrental({}) {
  const [carRentals, setCarRentals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCarId, setSelectedCarId] = useState(null);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  // fetch da stavish vo api site Cars
  // Data.forEach((car) => {
  //   fetch(
  //     "https://travelagency-78872-default-rtdb.firebaseio.com/carrental.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         id: car.id,
  //         img: car.imgSrc,
  //         nameCar: car.nameCar,
  //         pricePerDay: car.pricePerDay,
  //         seats: car.seats,
  //         bags: car.bags,
  //         description: car.description,
  //       }),
  //     }
  //   )
  //     .then((response) => {
  //       console.log(`Data for car ${car.id} has been stored in Firebase`);
  //     })
  //     .catch((error) => {
  //       console.error(
  //         `Error storing data for car ${car.id} in Firebase: ${error}`
  //       );
  //     });
  // });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

  useEffect(() => {
    Aos.init({duration: 800});
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleRentButtonClick = (id) => {
    setSelectedCarId(id);
  };

  const backdropHandler = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedCarId(null);
    }
  };

  return (
    <>
      (
      {!loading ? (
        <section className="main1 container section ">
          <div className="secTitle">
            <h3 data-aos="fade-left" className="title">
              <div>Cars available for renting</div>
            </h3>
          </div>
          <div className="secContent1 ">
            {carRentals.map(
              ({id, img, nameCar, pricePerDay, seats, bags, description}) => {
                return (
                  <div
                    key={id}
                    data-aos="fade-up"
                    className="singleDestination"
                  >
                    <div className="cardInfo">
                      <h4 className="destTitle">{nameCar}</h4>
                      <span className="continent flex">
                        <span className="name">{`for ${pricePerDay}$ per day`}</span>
                      </span>
                      <div className="fees flex">
                        <div className="grade1">
                          <span>
                            <BsFillPersonCheckFill className="icon" />
                            <div>{seats}</div>
                          </span>
                          <span>
                            <BsFillBagCheckFill className="icon" />
                            <div>{bags}</div>
                          </span>
                        </div>
                        <div className="price">
                          <div className="imageDiv">
                            <img src={img} alt={nameCar} />
                          </div>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description.substring(0, 100)}...</p>
                      </div>

                      <button
                        className="btn flex"
                        onClick={() => handleRentButtonClick(id)}
                      >
                        More details about this car
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
      ) : (
        <div className="spinnercar">
          <LoadingSpinner />
        </div>
      )}
      )
      {/* /////////////////////////////////////////////////////////////////////////////////////// */}
      {selectedCarId && (
        <div className="backdrop" onClick={backdropHandler}>
          <section className="main2 container">
            {carRentals
              .filter(({id}) => id === selectedCarId)
              .map(
                ({id, img, nameCar, pricePerDay, seats, bags, description}) => (
                  <div className="secContent2 secContentClicked">
                    <div
                      key={id}
                      data-aos="fade-up"
                      className="singleDestination2"
                    >
                      <div className="cardInfo2">
                        <h4 className="destTitle2">{nameCar}</h4>

                        <span className="continent2 flex">
                          <span className="name2">
                            Price per day: ${pricePerDay}
                          </span>
                          <div className="grade2">
                            <span>
                              <BsFillPersonCheckFill className="icon" />
                              <div>{seats}</div>
                            </span>
                            <span>
                              <BsFillBagCheckFill className="icon" />
                              <div>{bags}</div>
                            </span>
                          </div>
                        </span>

                        <div className="fees2 flex">
                          <div className="desc2">
                            <p>{description}</p>
                          </div>
                          <div className="grade2"></div>
                          <div className="price22">
                            <div className="imageDiv22">
                              <img src={img} alt={nameCar} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
          </section>
        </div>
      )}
    </>
  );
}

export default Carrental;
