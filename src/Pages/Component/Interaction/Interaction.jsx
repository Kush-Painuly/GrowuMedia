import React from "react";

const Interaction = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-96">
        <div className=" bg-black rounded-full">
          <div className="flex text-9xl font-extrabold text-white items-center justify-center h-52 w-52 rounded-full">
            &#8593;
          </div>
        </div>
      <div className="absolute top-14">
        <h4 className="text-2xl font-bold font-poppins text-black">
          HIT THE RIGHT DIRECTION BUTTON TO GOT THE NEXT SLIDE
        </h4>
      </div>
      </div>
    </>
  );
};

export default Interaction;
