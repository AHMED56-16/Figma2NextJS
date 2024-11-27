'use client';
import { useState } from "react";
import Image from "next/image";
import social from "@/public/assests/Social Links.png";
import logo from "@/public/assests/Ddsgnr Library.png";
import hero1Image from "@/public/assests/Image.png";
import logo2 from "@/public/assests/Logos.png";
import penTool from "@/public/assests/pen-tool-2.png";
import bookImage1 from "@/public/assests/book.png";
import bookImage2 from "@/public/assests/book2.png";
import briefcaseImg from "@/public/assests/briefcase.png";
import arrowImg from "@/public/assests/arrow-2.png";
import grpImg from "@/public/assests/group.png";
import linkImg from "@/public/assests/link.png";
import microphoneImg from "@/public/assests/microphone.png";
import volumeImg from "@/public/assests/volume-high.png";
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
        {/* Header Top Bar */}
        <div className="hidden lg:flex w-full h-[54px] pr-16 pl-[62px] bg-[#F7F7F7] items-center justify-between">
          <div className="flex items-center">
            <span className="font-normal mr-4">Phone Number: 956 742 455 678</span>
            <span className="font-normal">Email: info@ddsgnr.com</span>
          </div>
          <div>
            <Image src={social} alt="social media icons" />
          </div>
        </div>

        {/* Header Main Navigation */}
        <div className="w-full h-[72px] pr-16 pl-[62px] bg-[#F7F7F7] border-b-[#676767] flex items-center justify-between lg:pr-4 lg:pl-4">
          <div className="lg:block xl:flex">
            <Image src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
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

        {/* Mobile Navigation Menu */}
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

      {/* First Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-auto lg:h-[800px] w-full px-4 lg:px-16 pt-16 lg:pt-0">
        {/* Content Section */}
        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start gap-[24px] px-4 lg:px-8">
          <h3 className="w-full lg:w-[380px] h-auto font-roboto font-bold text-[40px] leading-[48px] text-center lg:text-left">
            Learn new skills<br />online with ease
          </h3>
          <p className="w-full lg:w-[380px] h-auto font-roboto font-normal text-[18px] leading-[27px] text-center lg:text-left">
            Discover a wide range of courses covering a variety of <br />subjects, taught by expert instructors.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <button className="w-full lg:w-[178px] h-[48px] border rounded-[5px] py-2 px-4">Start learn</button>
            <button className="w-full lg:w-[178px] h-[48px] border rounded-[5px] bg-black text-white py-2 px-4">Explore Courses</button>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-[50%] flex justify-center items-center mt-4 lg:mt-0">
          <Image className="max-w-full max-h-full object-contain" src={hero1Image} alt="Hero 1 image" />
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full h-auto lg:h-[239.34px] px-4 lg:px-6 py-12 lg:py-8 bg-[#F7F7F7] flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
        <h5 className="w-full lg:w-[428px] font-roboto font-bold text-[24px] leading-[33.6px] text-center lg:text-left">
          Trusted by 2000+ companies <br />worldwide.
        </h5>
        <div className="w-full lg:w-[428px] flex justify-center items-center">
          <Image className="max-w-full h-[56px]" src={logo2} alt="logo 2" />
        </div>
      </section>

      <section className="w-full h-auto lg:h-[862px] px-4 lg:px-6 py-12 lg:py-8 flex flex-col items-center gap-8 lg:gap-12">
  <div className="w-full lg:w-[428px]">
    <h2 className="font-roboto font-bold text-[48px] leading-[57.6px] text-center lg:text-left">
      Explore Courses By Category
    </h2>
    <p className="font-roboto font-normal text-[18px] leading-[27px] text-center lg:text-left">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
    </p>
  </div>

  {/* Card Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
    {/* Card 1 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={penTool} alt="pen" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Design & Development</h1>
        <p className="text-[18px]">50+ Courses Available</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={volumeImg} alt="volume" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Marketing</h1>
        <p className="text-[18px]">50+ Courses Available</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={grpImg} alt="grp" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Development</h1>
        <p className="text-[18px]">30+ Courses Available</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={microphoneImg} alt="microphone" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Communication</h1>
        <p className="text-[18px]">45+ Courses Available</p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={linkImg} alt="link" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Digital Marketing</h1>
        <p className="text-[18px]">20+ Courses Available</p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={arrowImg} alt="arrow" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Self development</h1>
        <p className="text-[18px]">15+ Courses Available</p>
      </div>
    </div>

    {/* Card 7 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={briefcaseImg} alt="briefcase image" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Bussiness</h1>
        <p className="text-[18px]">25+ Courses Available</p>
      </div>
    </div>

    {/* Card 8 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={bookImage1} alt="book" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Finance</h1>
        <p className="text-[18px]">10+ Courses Available</p>
      </div>
    </div>

    {/* Card 9 */}
    <div className="p-4 bg-[#F7F7F7] rounded-[5px] flex items-center">
      <Image src={bookImage2} alt="book" className="w-[100px] h-[100px] p-[34px] gap-[10px] rounded-[5px]" />
      <div className="w-[246.67px] h-[57px] gap-6">
        <h1 className="text-[24px] font-bold">Consulting</h1>
        <p className="text-[18px]">40+ Courses Available</p>
      </div>
    </div>
  </div>
  <div className="w-full flex justify-center mt-8">
    <button className="border rounded-[5px] w-[200px] h-[48px] py-[12px] px-[24px]">View all Courses</button>
  </div>
</section>
    </div>
  );
}
