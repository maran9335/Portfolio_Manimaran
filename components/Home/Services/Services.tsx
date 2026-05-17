import React from 'react'
import ServicesCard from "./ServicesCard"

const Services = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">Collaborate with cross-functional 
            <br />Teams to maintain secure<br/>
             and optimized IT environments.</h1>
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
        gap-10 mt-20 items-center">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServicesCard 
                icon="images/s1.png"
                 name="Network Management" 
                 description="Manage and maintain company networks, routers, switches, and internet connectivity." />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <ServicesCard 
                icon="images/s2.png"
                 name="Technical Support" 
                 description="Install, configure, and troubleshoot computers, printers, and applications." />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServicesCard 
                icon="images/s3.png"
                 name="Cybersecurity Protection" 
                 description="Implement security updates, backups, and access control policies." />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ServicesCard
                 icon="images/s4.png"
                 name="System Administration" 
                 description="Perform regular maintenance, updates, and data management tasks." />
            </div>
        </div>
        </div>
  )
}

export default Services