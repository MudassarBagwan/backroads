import React from 'react'
import { socialLinks } from './Data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'


const Footer = () => {
  return (
    <>
       <footer className="section footer">
        
        <PageLinks parentClass='footer-links' itemClass='footer-link'/>


      <ul class="footer-icons">
      {socialLinks.map((link)=>{
                return (
                  <SocialLinks key={link.id} {...link}  itemClass='footer-icon'/>
                )
            
            })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </>
  )
}

export default Footer
