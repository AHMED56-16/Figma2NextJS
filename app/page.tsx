'use client'
import { useState } from "react";
import Image from "next/image";
import social from "@/public/assests/Social Links.png";
import logo from "@/public/assests/Ddsgnr Library.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
      <div className="hidden lg:flex w-full h-[54px] pr-16 pl-[62px] bg-[#F7F7F7] items-center justify-between">
        <div>
          <span className="w-[205px] h-[21px] font-normal mr-4">Phone Number: 956 742 455 678</span>
          <span className="w-[149px] h-[21px] font-normal">Email: info@ddsgnr.com</span>
        </div>
        <div>
          <Image src={social} alt="social media icons" />
        </div>
      </div>

      <div className="w-full h-[72px] pr-16 pl-[62px] bg-[#F7F7F7] border-b-[#676767] flex items-center justify-between lg:pr-4 lg:pl-4">
        <div className="lg:block xl:flex">
          <Image src={logo} alt="logo" />
        </div>

        <div className="hidden lg:flex gap-8 bg-[#FFFFFF] h-[44px] items-center">
          <a href="/" className="font-medium text-gray-800 hover:text-gray-900">Home</a>
          <a href="/" className="font-medium text-gray-800 hover:text-gray-900">Courses</a>
          <a href="/" className="font-medium text-gray-800 hover:text-gray-900">Services</a>
          <a href="/" className="font-medium text-gray-800 hover:text-gray-900">Achievements</a>
          <a href="/" className="font-medium text-gray-800 hover:text-gray-900">About Us</a>
          <a href="/" className="font-medium text-gray-800 hover:text-gray-900">Testimonial</a>
          <button className="w-[80px] h-[40px] border rounded-[5px] py-2 px-5">Login</button>
          <button className="bg-black text-white w-[80px] h-[40px] border rounded-[5px] py-2 px-5">Sign Up</button>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800">
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" /> 
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu*/}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full p-4">
          <a href="/" className="block text-gray-800 py-2">Home</a>
          <a href="/" className="block text-gray-800 py-2">Courses</a>
          <a href="/" className="block text-gray-800 py-2">Services</a>
          <a href="/" className="block text-gray-800 py-2">Achievements</a>
          <a href="/" className="block text-gray-800 py-2">About Us</a>
          <a href="/" className="block text-gray-800 py-2">Testimonial</a>
          <button className="w-full h-[40px] border rounded-[5px] py-2 px-5 mt-2">Login</button>
          <button className="bg-black text-white w-full h-[40px] border rounded-[5px] py-2 px-5 mt-2">Sign Up</button>
        </div>
      )}
      </header>
    </div>
  );
}
