import React from "react";
import swiggle from "../../../assets/swiggle.PNG";
const Process = () => {
  return (
    <>
      <div className="py-10">
        <p className="text-center font-extrabold font-oswald text-black text-7xl py-4">
          How It Works ?
        </p>
        <div className="container mx-auto p-10">
          <div className="flex items-center justify-start gap-10">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-custom-dark">
              <h1 className="text-4xl font-bold">1.</h1>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                It starts with strategy.
              </h2>
              <p className="text-gray-600">
                When you sign up we'll ask you some onboarding <br /> questions
                and do a kickoff call to understand your goals.
              </p>
            </div>
            <div>
              <img src={swiggle} alt="point-1" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-10 mt-10">
            <div>
              <img src={swiggle} alt="point-2" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                It starts with strategy.
              </h2>
              <p className="text-gray-600">
                When you sign up we'll ask you some onboarding <br /> questions
                and do a kickoff call to understand your goals.
              </p>
            </div>
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-custom-dark">
              <h1 className="text-4xl font-bold">2.</h1>
            </div>
          </div>
          <div className="flex items-center justify-start gap-10 mt-10">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-custom-dark">
              <h1 className="text-4xl font-bold">3.</h1>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                It starts with strategy.
              </h2>
              <p className="text-gray-600">
                When you sign up we'll ask you some onboarding <br /> questions and do
                a kickoff call to understand your goals.
              </p>
            </div>
            <div>
                <img src={swiggle} alt="point-3" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-10 mt-10">
            <div>
              <img src={swiggle} alt="point-4" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                It starts with strategy.
              </h2>
              <p className="text-gray-600">
                When you sign up we'll ask you some onboarding <br /> questions
                and do a kickoff call to understand your goals.
              </p>
            </div>
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-custom-dark">
              <h1 className="text-4xl font-bold">4.</h1>
            </div>
          </div>
          <div className="flex items-center justify-start gap-10">
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-custom-dark">
              <h1 className="text-4xl font-bold">5.</h1>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                It starts with strategy.
              </h2>
              <p className="text-gray-600">
                When you sign up we'll ask you some onboarding <br /> questions
                and do a kickoff call to understand your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
