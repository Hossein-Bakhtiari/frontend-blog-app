import React from "react";
import images from "../constant/images";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5">
        <div className="col-span-5">
          <h3 className="text-dark-light font-bold ">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Referral Program</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5">
          <h3 className="text-dark-light font-bold ">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">Illustrations</a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5">
          <h3 className="text-dark-light font-bold ">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5">
          <h3 className="text-dark-light font-bold ">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4">
            <li>
              <a href="/">Documentation</a>
            </li>
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>

        <div className="col-span-10 ">
          <img src={images.Logo} alt="logo" className="brightness-0 invert mx-auto" />
          <p className="text-sm text-dark-light text-center mt-4">Build a modern and creative website with crealand</p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300">
          <li>
              <a href="/">
                <AiOutlineTwitter classname="w-6 h-auto"/>
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook classname="w-6 h-auto"/>
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillYoutube classname="w-6 h-auto"/>
              </a>
            </li>
            <li>
              <a href="/">
                <AiFillInstagram classname="w-6 h-auto"/>
              </a>
            </li>
            <li>
              <a href="/">
                <BsTelegram classname="w-6 h-auto"/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
