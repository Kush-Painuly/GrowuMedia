import React from "react";
import about1 from "../../../assets/about1.PNG";
import about2 from "../../../assets/about2.PNG";
import review from "../../../assets/review.PNG";
const About = () => {
  return (
    <>
      <p className="text-center font-extrabold font-oswald text-gray-700 text-5xl py-14">
        Why We ?
      </p>
      <div className="flex items-start justify-between flex-wrap px-14 mb-14">
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          <div className="py-8">
            <p className="text-2xl font-bold text-gray-900 leading-snug">
              Save 60-70% on salaries
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hiring the best global talent unlocks cost savings of 70% on
              average when compared to US-based equivalents.
            </p>
          </div>
          <div className="py-8">
            <p className="text-2xl font-bold text-gray-900 leading-snug">
              Hire within days
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We maintain a branch of pre-vetted talent ready to be trained and
              placed with Landed clients within 21 days.
            </p>
          </div>
          <div className="py-8">
            <p className="text-2xl font-bold text-gray-900 leading-snug">
              Expertly Trained
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every team member you hire is rigorously trained to deliver work
              of the highest quality while following your team's process.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-8 grid-rows-3 gap-4 w-full md:w-1/2 py-4 px-8 bg-white rounded-xl">
          <div className="row-span-3 col-span-3 bg-white rounded-xl p-4 border border-gray-400">
            <img
              src={about1}
              alt="about-image-1"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="border-1 border-black cursor-pointer text-white shadow-custom-dark bg-[#161616] rounded-xl  col-span-5 mx-8">
            <p className="text-gray-300 font-medium pl-10 pt-4 text-xl">
              <b className="text-white text-2xl">70%</b>
              <br /> Average Savings <br /> on salaries
            </p>
          </div>
          <div className="border-1 border-black cursor-pointer text-white shadow-custom-dark bg-[#161616] rounded-xl col-span-5 mx-8 mt-4">
            <p className="text-gray-300 font-medium pl-10 pt-4 text-xl">
              <b className="text-white text-2xl">21d</b>
              <br /> Average Time <br /> to Placement
            </p>
          </div>
          <div className=" col-start-1 row-start-4 border-1 border-black cursor-pointer text-white shadow-custom-dark bg-[#161616] rounded-xl  col-span-4 mt-4">
            <p className="text-gray-300 font-medium pl-10 pt-4 text-xl">
              <b className="text-white text-2xl">61%</b>
              <br /> Avg employees Pay increase
            </p>
          </div>
          <div className="col-start-5 row-start-3 row-span-4 rounded-xl col-span-4 pt-8 px-4 border border-gray-400">
            <img src={about2} alt="about-image-2" className="rounded-xl" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-14">
        <div className="bg-white w-3/12 p-8 rounded-xl ">
          <p className="text-gray-800 text-center text-sm">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div className="flex items-center justify-around py-4  ">
            <div className="w-1/5">
              <img src={review} alt="Review-person-image" className="w-full" />
            </div>
            <div>
              <p>Jon Sherman</p>
              <p className="text-sm text-gray-400">Founder at Practical Golf</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-3/12 p-8 rounded-xl ">
          <p className="text-gray-800 text-center text-sm">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div className="flex items-center justify-around py-4  ">
            <div className="w-1/5">
              <img src={review} alt="Review-person-image" className="w-full" />
            </div>
            <div>
              <p>Jon Sherman</p>
              <p className="text-sm text-gray-400">Founder at Practical Golf</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-3/12 p-8 rounded-xl ">
          <p className="text-gray-800 text-center text-sm">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div className="flex items-center justify-around py-4  ">
            <div className="w-1/5">
              <img src={review} alt="Review-person-image" className="w-full" />
            </div>
            <div>
              <p>Jon Sherman</p>
              <p className="text-sm text-gray-400">Founder at Practical Golf</p>
            </div>
          </div>
        </div>
        <div className="bg-white w-3/12 p-8 rounded-xl ">
          <p className="text-gray-800 text-center text-sm">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div className="flex items-center justify-around py-4  ">
            <div className="w-1/5">
              <img src={review} alt="Review-person-image" className="w-full" />
            </div>
            <div>
              <p>Jon Sherman</p>
              <p className="text-sm text-gray-400">Founder at Practical Golf</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;
