import React from "react";
import projectImg from "../../../assets/project.PNG";
const Projects = () => {
  return (
    <>
      <div>
        <div className="text-center py-8">
          <h1 className="font-bold text-black text-5xl font-oswald">
            Our Projects
          </h1>
        </div>
        <div className="flex items-center justify-center gap-14 flex-wrap p-4">
          <div>
            <button className="border-1 border-black cursor-pointer text-white shadow-custom-dark bg-[#161616] py-6 px-7 rounded-full">
              All Projects
            </button>
          </div>
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Motivation
            </button>
          </div>
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Corporate
            </button>
          </div>
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Motivation
            </button>
          </div>
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Corporate
            </button>
          </div>
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Motivation
            </button>
          </div>
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Corporate
            </button>
          </div>
        </div>
        <div className="flex items-start justify-start gap-14 px-14">
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Motivation
            </button>
          </div>
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Corporate
            </button>
          </div>
          <div>
            <button className="border border-gray-400 cursor-pointer text-black font-medium bg-transparent py-6 px-7 rounded-full">
              Motivation
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between m-8 p-8">
          <div className="shadow-2xl">
            <img src={projectImg} alt="Project-image" className="rounded-xl" />
          </div>
          <div className="shadow-2xl">
            <img src={projectImg} alt="Project-image" className="rounded-xl" />
          </div>
          <div className="shadow-2xl">
            <img src={projectImg} alt="Project-image" className="rounded-xl" />
          </div>
        </div>
        <div className="flex items-center justify-between m-8">
          <div className="shadow-2xl">
            <img src={projectImg} alt="Project-image" className="rounded-xl" />
          </div>
          <div className="shadow-2xl">
            <img src={projectImg} alt="Project-image" className="rounded-xl" />
          </div>
          <div className="shadow-2xl">
            <img src={projectImg} alt="Project-image" className="rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
