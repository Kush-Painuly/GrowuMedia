import React from "react";
import linkedin from "../../../assets/linkedin.PNG";
import twitter from "../../../assets/twitter.PNG";
import instagram from "../../../assets/instagram.PNG";
import facebook from "../../../assets/facebook.PNG";
import youtube from "../../../assets/youtube.PNG";
import footImg1 from "../../../assets/Thumbnail-foot.PNG";
import footImg2 from "../../../assets/VideoEdit-foot.PNG";
import footImg3 from "../../../assets/Podcast-foot.PNG";
import footImg4 from "../../../assets/HALF-TV-FOOT.PNG";
import footImg5 from "../../../assets/halfpublic-foot.PNG";
const Footer = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-8">
            <div>
              <h4 className="text-4xl text-gray-600">
                Have a project in mind ?
              </h4>
              <h4 className="text-4xl text-gray-600">Let us work together</h4>
            </div>
            <div>
              <button className=" capitalize border-1 cursor-pointer border-black text-white shadow-custom-dark bg-black py-4 px-6 rounded-full">
                Book an intro call &#8594;
              </button>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div>
                <img src={linkedin} alt="linkedin" />
              </div>
              <div>
                <img src={twitter} alt="twitter" />
              </div>
              <div>
                <img src={instagram} alt="instgram" />
              </div>
              <div>
                <img src={facebook} alt="facebook" />
              </div>
              <div>
                <img src={youtube} alt="youtube" />
              </div>
              <div>
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
          </div>
          <div>
            <ul>
              <p className="text-xl text-gray-500">Navigation</p>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  About
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  About Us
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  What we do
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  To The Power of 10
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  Donate
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p className="text-xl text-gray-500">Support</p>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  Help Center
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  FAQ
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  Contact
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p className="text-xl text-gray-500">Legal</p>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  General infro
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-300 ease">
                <a
                  href="#"
                  className="capitalize text-lg text-gray-600 hover:text-blue-500 transition duration-150"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
        <div className="flex items-center justify-around gap-24 pt-8">
          <div>
            <img src={footImg5} alt="footer-image" />
          </div>
          <div>
            <img src={footImg1} alt="footer-image" />
          </div>
          <div>
            <img src={footImg2} alt="footer-image" />
          </div>
          <div>
            <img src={footImg3} alt="footer-image" />
          </div>
          <div>
            <img src={footImg4} alt="footer-image" />
          </div>
        </div>
        <p className="text-center text-gray-500 pt-8">@ 2024 GrowuMedia. All rights reserved</p>
    </>
  );
};

export default Footer;
