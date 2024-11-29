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
import course1 from "@/public/assests/course1.png";
import course2 from "@/public/assests/course2.png";
import course3 from "@/public/assests/course3.png";
import course4 from "@/public/assests/course4.png";
import course5 from "@/public/assests/course5.png";
import course6 from "@/public/assests/course6.png";
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
      {/* Third Section */}
      <section className="w-full h-auto lg:h-[862px] px-4 lg:px-6 py-12 lg:py-8 flex flex-col items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-[800px]">
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
      {/* Fourth Section */}
      <section className="w-full  h-[451px] lg:h-[488px] px-6 lg:px-16 py-12 lg:py-8 flex flex-col items-center gap-12 lg:gap-20">
        <div className="w-full 2xl:w-[1152px]">
          <h2 className="font-roboto font-bold text-[32px] lg:text-[48px] leading-[41.6px] lg:leading-[57.6px] text-center">
            Our Achievements
          </h2>
          <p className="font-roboto font-normal text-[18px] leading-[27px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <ul className="flex flex-wrap justify-between gap-4 lg:gap-8">
            <li className="flex flex-col items-center">
              <h3 className="font-roboto font-bold text-[20px] lg:text-[40px] leading-[28px] lg:leading-[48px]">+200</h3>
              <p className="font-roboto font-normal text-[16px] lg:text-[16px] leading-[24px] lg:leading-[24px]">Courses</p>
            </li>
            <li className="flex flex-col items-center">
              <h3 className="font-roboto font-bold text-[20px] lg:text-[40px] leading-[28px] lg:leading-[48px]">50K</h3>
              <p className="font-roboto font-normal text-[16px] lg:text-[16px] leading-[24px] lg:leading-[24px]">Mentors</p>
            </li>
            <li className="flex flex-col items-center">
              <h3 className="font-roboto font-bold text-[20px] lg:text-[40px] leading-[28px] lg:leading-[48px]">150K</h3>
              <p className="font-roboto font-normal text-[16px] lg:text-[16px] leading-[24px] lg:leading-[24px]">Students</p>
            </li>
            <li className="flex flex-col items-center">
              <h3 className="font-roboto font-bold text-[20px] lg:text-[40px] leading-[28px] lg:leading-[48px]">100+</h3>
              <p className="font-roboto font-normal text-[16px] lg:text-[16px] leading-[24px] lg:leading-[24px]">Recognition</p>
            </li>
          </ul>
        </div>
      </section>
      {/* Fifth Section */}
      <section className="h-[2135px] md:h-[1742px] px-6 py-12 md:py-28 md:px-6 flex flex-col items-center">
    <div className="w-[249px] h-[93px] md:w-[768px] md:h-[118px] gap-4 md:gap-6 lg:w-[768px] text-center">
      <h1 className="font-roboto font-bold text-[20px] lg:text-[56px] leading-[41.6px] lg:leading-[67.2px]">Courses</h1>
      <p className="font-roboto font-normal text-[16px] lg:text-[16px] leading-[24px] lg:leading-[24px]">
        Your Ultimate Guide to learning
      </p>
    </div>
     {/* Button Group */}
     <div className="flex justify-center gap-4 mt-6">
      <button className="border-b-2 border-black py-2 px-4  hover:bg-black hover:text-white transition">Popular</button>
      <button className="border-none py-2 px-4  hover:bg-black hover:text-white transition">Recommended</button>
      <button className="border-none py-2 px-4  hover:bg-black hover:text-white transition">Best Price</button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {/* Card 1 */}
      <div className="bg-[#F7F7F7] border rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
      <Image src={course1} alt="Course 2" className="w-full h-48 object-cover mb-4"/>
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold mr-2">Course 1 Title</h3>
          <span className="flex items-center text-yellow-400">
            {"⭐".repeat(5)}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Course 1 Heading</h1>
        <p className="text-gray-700 mb-4">
          This is a brief description of Course 1, providing a concise overview.
        </p>
        <div className="flex justify-between items-center w-full">
          <button className="py-2 px-4 rounded">Enroll Now</button>
          <span className="text-lg font-bold">$199</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F7F7F7] border rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
        <Image src={course2} alt="Course 2" className="w-full h-48 object-cover mb-4"/>
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold mr-2">Course 2 Title</h3>
          <span className="flex items-center text-yellow-400">
            {"⭐".repeat(5)}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Course 2 Heading</h1>
        <p className="text-gray-700 mb-4">
          This is a brief description of Course 2, providing a concise overview.
        </p>
        <div className="flex justify-between items-center w-full">
          <button className="py-2 px-4 rounded">Enroll Now</button>
          <span className="text-lg font-bold">$299</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#F7F7F7] border rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
      <Image src={course3} alt="Course 2" className="w-full h-48 object-cover mb-4"/>
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold mr-2">Course 3 Title</h3>
          <span className="flex items-center text-yellow-400">
            {"⭐".repeat(5)}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Course 3 Heading</h1>
        <p className="text-gray-700 mb-4">
          This is a brief description of Course 3, providing a concise overview.
        </p>
        <div className="flex justify-between items-center w-full">
          <button className="py-2 px-4 rounded">Enroll Now</button>
          <span className="text-lg font-bold">$149</span>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-[#F7F7F7] border rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
      <Image src={course4} alt="Course 2" className="w-full h-48 object-cover mb-4"/>
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold mr-2">Course 4 Title</h3>
          <span className="flex items-center text-yellow-400">
            {"⭐".repeat(5)}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Course 4 Heading</h1>
        <p className="text-gray-700 mb-4">
          This is a brief description of Course 4, providing a concise overview.
        </p>
        <div className="flex justify-between items-center w-full">
          <button className="py-2 px-4 rounded">Enroll Now</button>
          <span className="text-lg font-bold">$179</span>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-[#F7F7F7] border rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
      <Image src={course5} alt="Course 2" className="w-full h-48 object-cover mb-4"/>
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold mr-2">Course 5 Title</h3>
          <span className="flex items-center text-yellow-400">
            {"⭐".repeat(5)}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Course 5 Heading</h1>
        <p className="text-gray-700 mb-4">
          This is a brief description of Course 5, providing a concise overview.
        </p>
        <div className="flex justify-between items-center w-full">
          <button className="py-2 px-4 rounded">Enroll Now</button>
          <span className="text-lg font-bold">$249</span>
        </div>
      </div>

      {/* Card 6 */}
      <div className="bg-[#F7F7F7] border rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
      <Image src={course6} alt="Course 2" className="w-full h-48 object-cover mb-4"/>
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-semibold mr-2">Course 6 Title</h3>
          <span className="flex items-center text-yellow-400">
            {"⭐".repeat(5)}
          </span>
        </div>
        <h1 className="text-2xl font-bold mb-4">Course 6 Heading</h1>
        <p className="text-gray-700 mb-4">
          This is a brief description of Course 6, providing a concise overview.
        </p>
        <div className="flex justify-between items-center w-full">
          <button className="py-2 px-4 rounded">Enroll Now</button>
          <span className="text-lg font-bold">$299</span>
        </div>
      </div>
    </div>
    <button className="border border-black hover:bg-black hover:text-white transition py-2 px-4 rounded mt-6">View all Courses</button>
  </section>
    </div>
  );
}
