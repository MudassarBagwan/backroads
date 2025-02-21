import React from 'react'
import Title from './Title'
import { services } from './Data'
import Service from './Service.js'
const Services = () => {
  return (
    <>
      <section className="section services" id="services">
      <Title title='our' subTitle='services'/>
      <div className="section-center services-center">
      { 
      services.map((service)=>{
          
           return <Service  {...service} key={service.id}/>               
            })}
      </div>
    </section>

    </>
  )
}

export default Services
