import React from "react";
import impact1 from "../../../assets/impact1.PNG";
import impact2 from "../../../assets/impact2.PNG";
const Impact = () => {
  return (
    <>
      <div className="bg-[#f3f3f3] py-12">
        <div className="p-4">
          <p className="text-center font-extrabold py-10 font-poppins text-black text-7xl">
            Our Impacts
          </p>
        </div>
        <div className="flex items-center justify-center px-10">
          <div className="overflow-hidden px-14 py-12 rounded-3xl bg-[#ececec] shadow-custom-dark">
            <div className="grid grid-cols-3 grid-row-3 h-custom-height">
              <div className="-translate-y-3/4">
                <img
                  src={impact1}
                  alt="impact1"
                  className="w-full rounded-custom-rounded"
                />
              </div>
              <div className="-translate-y-1/2">
                <img
                  src={impact1}
                  alt="impact1"
                  className="w-full rounded-custom-rounded"
                />
              </div>
              <div className="-translate-y-12">
                <img
                  src={impact1}
                  alt="impact1"
                  className="w-full rounded-custom-rounded"
                />
              </div>
              <div className="-translate-y-64">
                <img
                  src={impact1}
                  alt="impact1"
                  className="w-full rounded-custom-rounded"
                />
              </div>
              <div className="-translate-y-44">
                <img
                  src={impact2}
                  alt="impact1"
                  className="w-full rounded-custom-rounded"
                />
              </div>
              <div className="-translate-y-8">
                <img
                  src={impact1}
                  alt="impact1"
                  className="w-full rounded-custom-rounded"
                />
              </div>
              <div className="-translate-y-64">
                <img
                  src={impact1}
                  alt="impact1"
                  className="w-full rounded-custom-rounded"
                />
              </div>
              <div className="-translate-y-40">
                <img
                  src={impact1}
                  alt="impact1"
                  className="w-full rounded-custom-rounded"
                />
              </div>
              <div className="-translate-y-4">
                <img
                  src={impact1}
                  alt="impact1"
                  className=" w-full rounded-custom-rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
