import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { FaGreaterThan } from 'react-icons/fa'
import { BiDumbbell, BiStar } from "react-icons/bi";
import { GiLotus } from "react-icons/gi";
import "./Style/service.css"
const Service = () => {
  return (
    <>
     <Header/>
     <section className='service-main'>
     
            
             <div className="part-11 ">
                <div className="vertical-lineee"></div>
          <h3>OUR SERVICES</h3>
          <h2>Introducing Our </h2>
          <h2>Best Services</h2>
          
        </div>
    
     </section>
     <section className="section-3">
            <div className="">
              <div className="section3-heading">
                <div className="heading--">
                 <div className="vertical-line2"></div>
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
          <section className='section-44'>
              <div class="hero-section">
        <h1>Get Your Luxury Experience Now</h1>
        <div class="booking-form">
            <label for="checkin">Check In:</label>
            <input type="date" id="checkin" value="2023-12-24"/>        
            <label for="checkout">Check Out:</label>
            <input type="date" id="checkout" value="2023-12-28"/>
            
            <label for="room">Room:</label>
            <select id="room">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label for="guest">Guest:</label>
            <select id="guest">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button class="check-availability">Check Availability</button>
        </div>
    </div>
          </section>
       <Footer/> 
    </>
  )
}

export default Service
