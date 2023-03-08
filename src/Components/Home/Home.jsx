import React, {useEffect} from "react";
import "./home.css";
import video from "../../Assets/prvovideo.mp4";
import Aos from "aos";
import "../../../node_modules/aos/dist/aos.css";
import Typewriter from "typewriter-effect";
function Home() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>
      <div className="homeContent container ">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            <Typewriter
              options={{
                strings: [
                  "Find Your Perfect",
                  "Apply For Your Ideal",
                  "Enjoy Your Dream",
                ],
                autoStart: true,
                pauseFor: 2000,
                loop: true,
              }}
            />
            Holiday
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Home;
