import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SimpleSlider from "./Slider";
import "./Style/home.css";
import {
  FaBed,
  FaBath,
  FaSnowflake,
  FaWifi,
  FaChevronRight,
  FaGreaterThan,
} from "react-icons/fa";
import { BiDumbbell, BiStar } from "react-icons/bi";
import { GiLotus } from "react-icons/gi";
import { BsStarFill } from "react-icons/bs";
import EditableSection from "./EditableSection";
import axios from "axios";



const Home = () => {
    const [text, setText] = useState("Luxery Rooms & Suites");
    const [isEditing, setIsEditing] = useState(false);

    const saveText = async () => {
  
      const response = await axios.post("http://127.0.0.1:5000/update-section", {
        text,
      });
      console.log("Saved:", response.data);
      setIsEditing(false);
    
  };
  return (
    <>
      <Header />
   <div className="my-feature"><div className="part-111 ">
                <div className="vertical-lineee"></div>
          <h3>Welcome To the Website</h3>
   <EditableSection/>
         
          
        </div></div>
      <section className="main-banner">
        <SimpleSlider />
        <div className="check">
          <div className="checkin inin">
            <h5>Check In</h5>
            <input type="date" />
          </div>
          <div className="checkin checkout">
            <h5>Check Out</h5>
            <input type="date" />
          </div>
          <div className="checkin rooms">
            <h5>Rooms</h5>
            <select name="room" id="room">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="checkin availibilty">
            <button>Check Availibility &gt;</button>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="vertical-line"></div>
        <div className="heading--">
          {isEditing ? (
          <button className="btnuu" onClick={saveText}>Save</button>
        ) : (
          <button className="btnuu" onClick={() => setIsEditing(true)}>Edit</button>
        )}
          

      <h5>OUR ROOM CHOICES</h5>
      {isEditing ? (
        <input
        className="input-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          // style={{ width: "100%", padding: "5px" }}
        />
      ) : (
        <>
        <h3>{text}</h3>
        {/* <h2>{text}</h2> */}
        </>
      )}
          <div className="section2-main">
            <div className="card-background">
              <div className="text-overlay">
                <h2 className="">Superior Suite</h2>
                <p className="text-lg opacity-80">$300/Night</p>
                <div className="divider"></div>
                <div className="">
                  <button className="book-now-text">Book Now &gt;</button>
                  <div className="icon-row">
                    <FaBed />
                    <FaBath />
                    <FaChevronRight />
                    <FaWifi />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-background">
              <div className="text-overlay">
                <h2 className="">Superior Suite</h2>
                <p className="">$300/Night</p>
                <div className="divider-2"></div>
              </div>
            </div>
          </div>

          <div className="section2-main2">
            <div className="card-background">
              <div className="text-overlay">
                <h2 className="">Superior Suite</h2>
                <p className="">$300/Night</p>
                <div className="divider-2"></div>
              </div>
            </div>{" "}
            <div className="card-background">
              <div className="text-overlay">
                <h2 className="">Superior Suite</h2>
                <p className="">$300/Night</p>
                <div className="divider-2"></div>
              </div>
            </div>{" "}
            <div className="card-background">
              <div className="text-overlay">
                <h2 className="">Superior Suite</h2>
                <p className="">$300/Night</p>
                <div className="divider-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="">
          <div className="section3-heading">
            <div className="heading--">
              <h5>INTRODUCING OUR SERVICES</h5>
              <h4>Amenites That You Can Enjoy</h4>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus maxime nisi quaerat quod cupiditate consectetu
              </p>
            </div>
          </div>
          <div className="mainSection3">
            <div className="blank"></div>
            <div className="fill">
              <div className="icon">
                <BiDumbbell className="dumble" />
              </div>
              <h5 className="fill-head">WorkOuts & Yoga Rooms</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum veritatis quaerat, non excepturi voluptatibus ab
                molestiae ex voluptate iure assumenda ducimus temporibus nihil
                vel, explicabo ad, nostrum dolore hic natus?
              </p>
              <div className="fill-buuton">
                <button className="btnuu">
                  Dicover More <FaGreaterThan className="ico" />
                </button>
              </div>
            </div>

            <div className="fill">
              <div className="icon">
                <GiLotus className="dumble" />
              </div>
              <h5 className="fill-head">Spa Massage & Sauna</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum veritatis quaerat, non excepturi voluptatibus ab
                molestiae ex voluptate iure assumenda ducimus temporibus nihil
                vel, explicabo ad, nostrum dolore hic natus?
              </p>
              <div className="fill-buuton">
                <button className="btnuu">
                  Dicover More <FaGreaterThan className="ico" />
                </button>
              </div>
            </div>
            <div className="blank"></div>

            <div className="blank"></div>
            <div className="fill">
              <div className="icon">
                <GiLotus className="dumble" />
              </div>
              <h5 className="fill-head">Multiple Cuisines & Beverages</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum veritatis quaerat, non excepturi voluptatibus ab
                molestiae ex voluptate iure assumenda ducimus temporibus nihil
                vel, explicabo ad, nostrum dolore hic natus?
              </p>
              <div className="fill-buuton">
                <button className="btnuu">
                  Dicover More <FaGreaterThan className="ico" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="section4-main ">
          <div className="vertical-line"></div>
          <h4>BEST PLACE TO RELAX & ENJOY</h4>
          <h3>What Our Client Says </h3>
        </div>
        <div className="testmonial">
          <div className="blankii"></div>
          <div className="stara">
            <BsStarFill className="iconn" />
            <BsStarFill className="iconn" />
            <BsStarFill className="iconn" />
            <BsStarFill className="iconn" />
            <BsStarFill className="iconn" />
            <p className="text--">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              repellendus ad provident, sed quisquam dignissimos, iure voluptate
              minima quasi inventore architecto odio vitae. Illo ut obcaecati,
              fuga nemo omnis eius?
            </p>
            <p className="name--">Jackson Dean</p>
            <p className="guest--">Guest</p>
          </div>
        </div>
      </section>
      <section className="section-5">
        <div>
          <div className="vertical-lineee"></div>
          <h5 className="section5-head">MEET OUR TEAM</h5>
          <h3>Expert Team Persons</h3>
        </div>
        <div className="employee--">
          <div className="first">
            <div className="oneto"></div>
            <div>
              <p>Laurant Wane</p>
              <h6>Hotel Manager</h6>
            </div>
          </div>
          <div className="second first ">
            {" "}
            <div className="oneto"></div>
            <div>
              <p>Laurant Wane</p>
              <h6>Hotel Manager</h6>
            </div>
          </div>
          <div className="third first">
            {" "}
            <div className="oneto"></div>
            <div>
              <p>Laurant Wane</p>
              <h6>Hotel Manager</h6>
            </div>
          </div>
          <div className="forth first">
            {" "}
            <div className="oneto"></div>
            <div>
              <p>Laurant Wane</p>
              <h6>Hotel Manager</h6>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
