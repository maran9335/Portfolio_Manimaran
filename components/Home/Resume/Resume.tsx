import React from 'react'
import ResumeCard from "./ResumeCard"
import { FaLaptopCode, FaSchool, FaUniversity } from "react-icons/fa"
import { MdOutlineRouter } from "react-icons/md"
import { FaComputer, FaSchoolFlag } from "react-icons/fa6"
import { BiCctv } from "react-icons/bi"

function Resume() {
  return (
    <div className="pt-20 pc-16">
     <div className="w-[90%] sm:[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 ">
        {/* worr part */}

            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    My Work <span className="text-cyan-200">Experience</span></h1>

                  <div  className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaLaptopCode} role="IT Support"/>
                    <ResumeCard Icon={FaComputer} role="IT Specialist"/>
                    <ResumeCard Icon={MdOutlineRouter} role="Networking"/>
                    <ResumeCard Icon={BiCctv} role="CCTV"/>
                    </div>  
            </div>

            {/* education part */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    My <span className="text-cyan-200">Education</span></h1>

 <div className="mt-10" data-aos="zoom-out" data-aos-anchor-placement="top-center"
 data-aos-delay="300">
                    <ResumeCard Icon={FaSchoolFlag} role="Higher Secondary Certificate" date="June 2016 - March 2017"/>
                    <ResumeCard Icon={FaUniversity} role="Higher Education" date ="June 2019 - March 2022"/>
                    
                    </div>  
                </div>
     </div>
        </div>
  )
}

export default Resume