import React from 'react'

const SocialLinks = ({href,icon,itemClass }) => {
  return (
    <>
     <li> <a 
                        href={href} 
                        target="_blank"
                        rel='noreferrer'
                        className={itemClass}
                      ><i class={icon}></i></a>
                  </li>
      
    </>
  )
}

export default SocialLinks
