import React from "react";
import { images } from "./images.js";

const Description = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-16 p-6 pt-12 md:pb-36 w-full pl-10">
      {/* text block – only heading & paragraph replaced */}
      <div className="max-w-xl text-center lg:text-right lg:mt-10 mt-14 md:mt-1">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 mt-6 md:mt-32">
          Why We Do This
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
          Because silence is not natural it is enforced. Because women at the
          margins are not waiting to be empowered; they are demanding dignity.
          Domestic violence, caste shame, unpaid care and religious policing are
          not private problems; they are political. We do this for the Dalit
          woman told not to speak, the Muslim girl told not to dream, the tribal
          mother raising children in silence, the queer person erased from their
          own story. We are not here for charity; we are here for justice. No
          donors. No gatekeepers. Just women, learning and rising together.
        </p>
      </div>
      {/* images block – unchanged */}
      <div className="relative w-full max-w-lg flex-shrink-0">
        <div className="md:w-[28rem] md:h-[28rem] sm:w-[24rem] sm:h-[24rem] w-[18rem] h-[18rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src={images.work_together_2}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-28 right-5 sm:-right-5 md:w-[20rem] md:h-[20rem] sm:w-[16rem] sm:h-[16rem] w-[12rem] h-[12rem] rounded-xl overflow-hidden shadow-md">
          <img
            src={images.work_together_1}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
