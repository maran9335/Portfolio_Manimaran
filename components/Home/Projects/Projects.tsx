import React from 'react'

const Projects = () => {
  return (
     <div className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white                                                                                                                                                                                                                                                                                                                                                                       ">
            A Small Selection Of Recent <br/> <span className="text-cyan-300">projects</span> </h1>
    <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
       
       {/* 1st project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"data-aos-delay="0">
            <img src="/images/pro1.jpeg" 
            alt="" width={800} 
            height={650} 
            className="rounded-lg w-75 h-75 object-cover"/>
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">Configured and maintained 5G modem systems</h1>
            <h1 className="pt-2 font-medium text-white">(Networking & Hardware)</h1>
        </div>
            {/* 2nd project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"data-aos-delay="100" >
            <img src="/images/pro2.jpeg" 
            alt="" 
            className="rounded-lg w-75 h-75 object-cover"/>
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">Set up and managed server room systems</h1>
            <h1 className="pt-2 font-medium text-white">(Server Maintenance)</h1>
        </div>
            {/* 3rd project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"data-aos-delay="200">
            <img src="/images/pro3.jpeg" 
            alt=""
            className="rounded-lg w-75 h-75 object-cover "/>
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
                Access Control System Management</h1>
            <h1 className="pt-2 font-medium text-white">(Biometric Systems)</h1>
        </div>
            {/* 4th Project */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"data-aos-delay="300">
            <img src="/images/pro4.jpeg"          
            className="rounded-lg w-75 h-75 object-cover "/>
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">Set up cameras with DVR/NVR Recording systems</h1>
            <h1 className="pt-2 font-medium text-white">(Security System)</h1>
        </div>
    </div>
    </div>
  )
}

export default Projects