import React from "react";
import person from "../../../assets/person.PNG";
import symbol from "../../../assets/symbol.PNG";
import person2 from "../../../assets/person2.PNG";
import symbol2 from "../../../assets/symbol2.PNG";
const Pricing = () => {
  return (
    <>
      <p className="text-center font-extrabold font-oswald text-black text-7xl py-8">
        How It Works ?
      </p>
      {/*First and second pricing */}
      <div className="flex items-center justify-center gap-4">
        {/*First */}
        <div className="bg-[#ebebeb] rounded-2xl p-4">
          <div className="bg-white p-14 rounded-xl ">
            <div className="pb-20">
              <div className="flex flex-col items-start gap-4">
                <p className="text-black font-bold text-2xl font-narrow">
                  Premium
                </p>
                <p className="text-lg text-gray-600">
                  A Competitve Repurposing Solution: For new and expanding{" "}
                  <br />
                  podcasts, unlock higher content discovery,engagement and{" "}
                  <br /> audience growth today.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-start gap-4">
                <div>
                  <p className="text-black font-bold text-2xl">$ 6,000 /mo</p>
                </div>
                <div>
                  <button className="border-1 cursor-pointer border-black text-white shadow-custom-dark bg-black py-4 px-6 rounded-full capitalize">
                    Book an intro call &#8594;
                  </button>
                </div>
              </div>
              <div className="border border-gray-600 rounded-lg py-2 px-5">
                <div className="flex items-center justify-between pb-4">
                  <img src={person} alt="person-image" className="w-1/12" />
                  <p>Sahil Bloom</p>
                  <img src={symbol} alt="flower-symbol" className="w-1/12" />
                </div>
                <p className="text-black font-medium">
                  "This new brand is absolutely fire."
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-start justify-center gap-4 py-8">
            <div className="flex items-center gap-14">
              <p className="text-gray-600 font-medium">
                30 repurposed short videos a month
              </p>
              <p className="text-gray-600 font-medium">
                Thumbnails for all assests
              </p>
            </div>
            <p className="text-gray-600 font-medium">
              8 repurpsed medium-length youtube videos
            </p>
            <p className="text-gray-600 font-medium">
              Cinematic teaser trailers for each episode
            </p>
            <p className="text-gray-600 font-medium">
              All posted on YT,IG,FB,TT & LI.
            </p>
          </div>
        </div>
        {/*second */}
        <div className="bg-[#ebebeb] p-4 rounded-2xl ">
          <div className="bg-white p-14 rounded-xl ">
            <div className="pb-20">
              <div className="flex flex-col items-start gap-4">
                <p className="text-black font-bold text-2xl font-narrow">
                  Premium
                </p>
                <p className="text-lg text-gray-600">
                  A Competitve Repurposing Solution: For new and expanding{" "}
                  <br />
                  podcasts, unlock higher content discovery,engagement and{" "}
                  <br /> audience growth today.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col items-start gap-4">
                <div>
                  <p className="text-black font-bold text-xl">$ 6,000 /mo</p>
                </div>
                <div>
                  <button className="border-1 cursor-pointer border-black text-white shadow-custom-dark bg-black py-4 px-6 rounded-full capitalize">
                    Book an intro call &#8594;
                  </button>
                </div>
              </div>
              <div className="border border-gray-600 rounded-lg py-2 px-5">
                <div className="flex items-center justify-between pb-4">
                  <img src={person} alt="person-image" className="w-1/12" />
                  <p>Sahil Bloom</p>
                  <img src={symbol} alt="flower-symbol" className="w-1/12" />
                </div>
                <p className="text-black font-medium">
                  "This new brand is absolutely fire."
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-start justify-center gap-4 py-8">
            <div className="flex items-center gap-14">
              <p className="text-gray-600 font-medium">
                30 repurposed short videos a month
              </p>
              <p className="text-gray-600 font-medium">
                Thumbnails for all assests
              </p>
            </div>
            <p className="text-gray-600 font-medium">
              8 repurpsed medium-length youtube videos
            </p>
            <p className="text-gray-600 font-medium">
              Cinematic teaser trailers for each episode
            </p>
            <p className="text-gray-600 font-medium">
              All posted on YT,IG,FB,TT & LI.
            </p>
          </div>
        </div>
      </div>
      {/*third and fourth pricing */}
      <div className=" mt-4 flex items-center justify-center gap-4">
        {/*third */}
        <div className="bg-[#ebebeb] rounded-2xl p-4">
          <div className="bg-white p-14 rounded-xl ">
            <div className="pb-20">
              <div className="flex flex-col items-start gap-4">
                <p className="text-black font-bold text-2xl font-narrow">
                  Premium
                </p>
                <p className="text-lg text-gray-600">
                  A Competitve Repurposing Solution: For new and expanding
                  <br />
                  podcasts, unlock higher content discovery,engagement and
                  <br /> audience growth today.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-start gap-4">
                <div>
                  <p className="text-black font-bold text-2xl">$ 6,000 /mo</p>
                </div>
                <div>
                  <button className="border-1 cursor-pointer border-black text-white shadow-custom-dark bg-black py-4 px-6 rounded-full capitalize">
                    Book an intro call &#8594;
                  </button>
                </div>
              </div>
              <div className="border border-gray-600 rounded-lg py-2 px-5">
                <div className="flex items-center justify-between pb-4">
                  <img src={person} alt="person-image" className="w-1/12" />
                  <p>Sahil Bloom</p>
                  <img src={symbol} alt="flower-symbol" className="w-1/12" />
                </div>
                <p className="text-black font-medium">
                  "This new brand is absolutely fire."
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-start justify-center gap-4 py-8">
            <div className="flex items-center gap-14">
              <p className="text-gray-600 font-medium">
                30 repurposed short videos a month
              </p>
              <p className="text-gray-600 font-medium">
                Thumbnails for all assests
              </p>
            </div>
            <p className="text-gray-600 font-medium">
              8 repurpsed medium-length youtube videos
            </p>
            <p className="text-gray-600 font-medium">
              Cinematic teaser trailers for each episode
            </p>
            <p className="text-gray-600 font-medium">
              All posted on YT,IG,FB,TT & LI.
            </p>
          </div>
        </div>
        {/*fourth */}
        <div className="bg-black p-4 rounded-2xl ">
          <div className="bg-[#1a1a1a] p-14 rounded-xl ">
            <div className="pb-20">
              <div className="flex flex-col items-start gap-4">
                <p className="text-white font-bold text-2xl font-narrow">
                  Custom
                </p>
                <p className="text-lg text-gray-400">
                  A Competitve Repurposing Solution: For new and expanding
                  <br />
                  podcasts, unlock higher content discovery,engagement and
                  <br /> audience growth today.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col items-start gap-4">
                <div>
                  <p className="text-white font-bold text-xl">$ 6,000 /mo</p>
                </div>
                <div>
                  <button className="border-1 cursor-pointer font-bold border-white text-black shadow-custom-light bg-white py-4 px-6 rounded-full capitalize">
                    Book an intro call &#8594;
                  </button>
                </div>
              </div>
              <div className="border border-gray-600 rounded-lg py-2 px-5">
                <div className="flex items-center justify-between pb-4">
                  <img src={person2} alt="person-image" className="w-1/12" />
                  <p className="text-white">Ashley Wilson, COO</p>
                  <img src={symbol2} alt="flower-symbol" className="w-1/12" />
                </div>
                <p className="text-white font-medium">
                  "I love the (site) design and brand."
                </p>
              </div>
            </div>
          </div>
          <div className="container flex flex-col items-start justify-center gap-4 py-8">
            <div className="flex items-center gap-14">
              <p className="text-gray-400 font-medium">
                Fully Managed Projects
              </p>
              <p className="text-gray-400 font-medium">
                Access our Entire Team
              </p>
            </div>
            <div className="flex items-center gap-24">
              <p className="text-gray-400 font-medium">
                Creative Strategy
              </p>
              <p className="text-gray-400 font-medium">
                Updates every 2 days
              </p>
            </div>
            <div className="flex items-center gap-14">
              <p className="text-gray-400 font-medium">
                Weekly Consulting Call
              </p>
              <p className="text-gray-400 font-medium">
                Cancel Anytime
              </p>
            </div>
            <p className="text-gray-400 font-medium">
              Everything included
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
