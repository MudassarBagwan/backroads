import React from 'react'
import logo from '../images/logo.svg'
import { socialLinks } from './Data';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';



const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      < div className="nav-center">
        <div className="nav-he ader">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
       <PageLinks parentClass='nav-links' itemClass='nav-link'/>
        <ul class="nav-icons">
        {socialLinks.map((link)=>{
                return (
                  <SocialLinks key={link.id} {...link}  itemClass='nav-icon'/>
           );
            
            })}
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar
