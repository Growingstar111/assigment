import React from "react";
import "./Style/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {


    
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <div className="main-sec">
            <div className="first-sec">
              <img src="../images\Screenshot (21).png" alt="" width={"80%"} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                obcaecati accusantium quas autem libero? Quis autem est, facere
                aliquam ullam sit mollitia ducimus
              </p>
            </div>

            <div className="second-sec">
              <ul>
                <h4>USEFUL LINKS</h4>
                <li>
                  <p>
                    <Link>HOME</Link>
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <Link>ABOUT</Link>
                  </p>
                </li>

                <li>
                  <p>
                    <Link>SERVICE</Link>
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <Link>ROOM</Link>
                  </p>
                </li>
              </ul>
            </div>
            <div className="third-sec">
              <h4>SUBSCRIBE</h4>
              <p>
                Don't miss to subscribe our news. kindly fill the form below 
              </p>
              <div className="email-enter">
                <input type="text" placeholder="Your Email Here" />
                <button>&gt;</button>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
