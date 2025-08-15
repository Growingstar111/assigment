import React from 'react'
import { Link,  NavLink, } from 'react-router-dom'
import '../components/Style/header.css'
function Header() {
  return (
    <>
     <header className="header">
        <nav className="navbar">
        
            <div className='main-logo'>
              <img src="../images\Screenshot (21).png" alt="logo" className="logo" width={"100%"} height={"100%"} />
            </div>
            <ul className="menu_NavLinks">
                <li>
              <NavLink to={'/'} className="home-link link">
                Home
              </NavLink>
                  <ul className='menu-hover'>
                    <li>
                        <p><Link to={''} className='sublink'>Home Page 1</Link></p>
                         <p><Link to={''} className='sublink'>Home Page 2</Link></p>
                    </li>
                  </ul>
                </li>
             
             

              <li><NavLink to={"/service"} className="service-link link">
                Service
              </NavLink>
               </li>
 <li><NavLink to={""} className="about-link link">
                About
              </NavLink>
             
                  </li>
            <li>
                  <NavLink to={""} className="pages-link link">
                Pages
              </NavLink>
               <ul className='menu-hover'>
                    <li>
                        <p><Link to={''} className='sublink'> Page 1</Link></p>
                    
                      <p>  <Link to={''} className='sublink'> Page 2</Link></p>
                    
                       <p> <Link to={''} className='sublink'> Page 3</Link></p>
                    
                       <p> <Link to={''} className='sublink'> Page 4</Link></p>
                   
                       <p> <Link to={''} className='sublink'> Page 5</Link></p>
                    </li>
                  </ul>
            </li>
              
            <li>  <NavLink to={""} className="contact-link link">
                Contact Us
              </NavLink>
              </li>
            </ul>
          
        </nav>
      </header>

      
 
    </>
  )
}

export default Header
