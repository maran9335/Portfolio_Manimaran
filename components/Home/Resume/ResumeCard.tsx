import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
};

const ResumeCard = ({ Icon, role, date }: Props) => {
  return (
    <div className="mb-6">
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">

        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center">
          <Icon className="text-white sm:w-8 sm:h-8 w-6 h-6" />
        </div>

        <div className="flex-1">
          {date && (
            <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold">
              {date}
            </h1>
          )}

          <h1 className="text-gray-200 text-xl sm:text-2xl font-semibold">
            {role}
          </h1>

          {/* DIFFERENT EXPERIENCE TEXT */}
          {role.includes("IT Support") && (
            <p className="text-gray-300 text-sm sm:text-base pt-3">
              Provided technical support for hardware, software, and network issues.
              Installed and configured Windows systems, printers, and business applications.
              Resolved user tickets and ensured smooth IT operations with minimal downtime.
            </p>
          )}

          {role.includes("IT Specialist") && (
            <p className="text-gray-300 text-sm sm:text-base pt-3">
              Managed IT infrastructure including systems, servers, and network devices.
              Performed troubleshooting, system upgrades, and security maintenance.
              Collaborated with teams to improve IT performance and reliability.
            </p>
          )}

          {role.includes("Networking") && (
            <p className="text-gray-300 text-sm sm:text-base pt-3">
              Supported network connectivity, router configuration, and LAN/Wi-Fi issues.
              Monitored network performance and ensured stable internet services.
              Assisted users in resolving connectivity and access problems quickly.
            </p>
          )}
          {role.includes("CCTV") && (
  <p className="text-gray-300 text-sm sm:text-base pt-3">
    Worked with CCTV surveillance systems to ensure security monitoring and system functionality.
    Installed, configured, and maintained CCTV cameras, DVR/NVR systems, and security equipment.
    
  </p>
)}
{role.includes("Higher Secondary Certificate") && (
  <p className="text-gray-300 text-sm sm:text-base pt-3">
    Studied at <span className="underline">St.Francis Higher Secondary School,</span><br /> C.K. Mangalam,<br />
    Ramanathapuram District, <br />
    Tamil Nadu, <br />
    India. 
      
  </p>
)}
{role.includes("Higher Education") && (
  <p className="text-gray-300 text-sm sm:text-base pt-3">
    Completed Higher education at <span className="underline text-bold">Alagappa University,</span><br />Bsc Computer Science, 
    <br />Karaikudi, <br />Sivaganga District, 
    <br />Tamil Nadu, <br />India.<br /> 
  </p>
)}
        </div>

      </div>
    </div>
  );
};

export default ResumeCard;