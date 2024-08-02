import React from "react";
import sponsor1 from "../../../assets/sponsor1.PNG";
import sponsor2 from "../../../assets/sponsor2.PNG";
import sponsor3 from "../../../assets/sponsor3.PNG";
import sponsor4 from "../../../assets/sponsor4.PNG";
import sponsor5 from "../../../assets/sponsor5.PNG";
const Results = () => {
  return (
    <>
      <div>
        <p className="text-center font-extrabold font-oswald text-black text-3xl">
          Our Results
        </p>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center gap-14 flex-wrap my-4 mx-8 p-4 w-midRange">
            <div className="w-twelve border-t border-gray-300 p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 border-l border-gray-300 h-4"></span>
                  <div className="text-3xl font-extrabold text-yellow-500">
                    &#8594;
                  </div>
                  <span className="flex-shrink-0 border-l border-gray-300 h-4"></span>
                </div>
                <div>
                  <p className="font-bold text-black">2500+ Clients</p>
                </div>
              </div>
            </div>
            <div className="w-twelve border-t border-gray-300 p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 border-l border-gray-300 h-4"></span>
                  <div className="text-3xl font-extrabold text-yellow-500">
                    &#8594;
                  </div>
                  <span className="flex-shrink-0 border-l border-gray-300 h-4"></span>
                </div>
                <div>
                  <p className="font-bold text-black">5000+ Video Edits</p>
                </div>
              </div>
            </div>
            <div className="w-twelve border-t border-gray-300 p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 border-l border-gray-300 h-4"></span>
                  <div className="text-3xl font-extrabold text-yellow-500">
                    &#8594;
                  </div>
                  <span className="flex-shrink-0 border-l border-gray-300 h-4"></span>
                </div>
                <div>
                  <p className="font-bold text-black">25+ Countries</p>
                </div>
              </div>
            </div>
            <div className="w-twelve border-t border-gray-300 p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="flex-shrink-0 border-l border-gray-300 h-4"></span>
                  <div className="text-3xl font-extrabold text-yellow-500">
                    &#8594;
                  </div>
                  <span className="flex-shrink-0 border-l border-gray-300 h-4"></span>
                </div>
                <div>
                  <p className="font-bold text-black">250Million+ Views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between py-14">
          <div>
            <img src={sponsor5} alt="sponsor1-image" />
          </div>
          <div>
            <img src={sponsor1} alt="sponsor1-image" />
          </div>
          <div>
            <img src={sponsor2} alt="sponsor1-image" />
          </div>
          <div>
            <img src={sponsor3} alt="sponsor1-image" />
          </div>
          <div>
            <img src={sponsor4} alt="sponsor1-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
