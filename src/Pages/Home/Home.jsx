import React from "react";
import Navigation from "../Component/Navigation/Navigation";
import Results from "../Component/Results/Results";
import Impact from "../Component/Impact/Impact";
import Projects from "../Component/Projects/Projects";
import About from "../Component/About/About";
import Process from "../Component/Process/Process";
import Pricing from "../Component/Princing/Pricing";
import Faq from "../Component/Faq/Faq";
import Interaction from "../Component/Interaction/Interaction";
import Footer from "../Component/Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navigation />
        <div className="text-center w-100 pt-44 pb-24">
          <p className="font-whisper font-medium text-9xl absolute top-72 left-80 text-yellow-500 leading-3">
            Not Just Another
          </p>
          <h1 className="font-extrabold font-mochiy text-8xl text-black">
            Video Editing Agency
          </h1>
          <p className="capitalize p-14 font-medium tracking-wider text-gray-500 text-xl text-center">
            We help you to start a new or grow your existing podcast that
            unlocks <br /> opportunities &
            <span className="text-black font-poppins">
              
              Leads, Expands Impacts and increases revenue
            </span>
          </p>
          <div className="flex items-center justify-center gap-8">
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-4 px-6 rounded-full">
              View Plans & Pricing
            </button>
            <button className="border-1 border-black cursor-pointer text-white shadow-custom-dark bg-[#161616] py-4 px-6 rounded-full">
              Our Projects &#8594;
            </button>
          </div>
        </div>
        <div>
          <Results />
        </div>
        <div>
            <Impact/>
        </div>
        <div className="mt-10">
          <Projects/>
        </div>
        <div className="bg-[#f3f3f3]">
          <About/>
        </div>
        <div className="mt-10">
          <Process/>
        </div>
        <div className="bg-[#f3f3f3] mt-10 py-10">
          <Pricing/>
        </div>
        <div>
          <Faq/>
        </div>
        <div>
          <Interaction />
        </div>
        <div className="bg-white mt-10 py-10">
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Home;
