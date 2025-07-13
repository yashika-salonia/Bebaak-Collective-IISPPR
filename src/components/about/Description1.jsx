import React from "react";
import { images } from "./images.js";

const Description = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-16 p-6 pt-12 md:pb-36 w-full pl-10">
      {/* images block – unchanged */}
      <div className="relative w-full max-w-lg flex-shrink-0">
        <div className="md:w-[28rem] md:h-[28rem] sm:w-[24rem] sm:h-[24rem] w-[18rem] h-[18rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src={"/gallery/im2.jpg"}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-28 right-5 sm:-right-5 md:w-[20rem] md:h-[20rem] sm:w-[16rem] sm:h-[16rem] w-[12rem] h-[12rem] rounded-xl overflow-hidden shadow-md">
          <img
            src={"/gallery/im20.jpeg"}
            loading="lazy"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* text block – only heading & paragraph replaced */}
      <div className="max-w-xl text-center lg:text-left lg:mt-10 mt-14 md:mt-1">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 mt-6 md:mt-32">
          About New Project
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
          Today, the torch is carried forward by Wajahat Mazahar Khan, a
          feminist public policy researcher at O.P. Jindal Global University.
          With deep experience in fieldwork and a strong foundation in critical
          feminist theory, he brings new energy that bridges local feminist
          struggle with intersectional thinking and public policy reform. <br />
          Nari Parcham is intergenerational, locally rooted, and globally
          conscious. We are not an NGO we are a movement without gatekeepers,
          without permission, and without apology. We are, and always will be,
          unapologetically feminist.
        </p>
      </div>
    </section>
  );
};

export default Description;
