import React, { useState } from 'react';
import logo from "../assets/KarthikLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram,FaFilePdf } from "react-icons/fa";
import PdfModal from "./PdfModal"; 

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/Karthik_Fullstackdeveloper_Resume.pdf"; 
    link.download = "Karthik_Fullstackdeveloper_Resume.pdf"; 
    link.click();
    setIsModalOpen(false); 
  };
  return (
    <>
   <nav className="mb-20 flex items-center justify-between py-6" >
    <div className="flex flex-shrink-0 items-center">
         <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/karthik-m-fullstackdeveloper/" target="_blank" rel="noopener noreferrer">   <FaLinkedin 
        className="cursor-pointer text-blue-400 hover:text-gray-100 transform hover:scale-110 transition-transform duration-300"
        />
        </a>
        <FaGithub
        className="cursor-pointer text-gray-600 hover:text-gray-100 transform hover:scale-110 transition-transform duration-300"
        />
        <FaInstagram 
        className="cursor-pointer text-pink-600 hover:text-gray-800 transform hover:scale-110 transition-transform duration-300"
        />
       <FaFilePdf 
            onClick={() => setIsModalOpen(true)} 
            className="cursor-pointer text-red-600 hover:text-gray-100 transform hover:scale-110 transition-transform duration-300" 
          />
    </div>
   </nav>
   <PdfModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onDownload={handleDownload} 
      />
   </>
  )
}

export default Navbar