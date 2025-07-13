import React from "react";
import { useNavigate } from "react-router-dom";

const MissionCard = ({ learn_more }) => {
  const navigate = useNavigate();

  return (
    <section
      className="frosted-container p-6 sm:p-8 lg:p-12 text-white w-[90%] sm:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%] h-fit bg-white/10 rounded-[1.5rem] sm:rounded-[2.1rem] lg:rounded-[3rem] backdrop-blur-xl"
      style={{ border: "1px solid rgba(255, 255, 255, 1)" }}
    >
      <h2 className="font-[playfair] font-medium text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 lg:mb-8 xl:mb-10 text-right">
        Why We Exist: Feminism for the Margins
      </h2>

      <p className="font-[montserrat] font-light text-lg xl:text-xl text-right mb-4">
       Nari Parcham exists to amplify the voices of women at the margins—Dalit, Muslim, Adivasi, queer, working-class—who are often ignored by mainstream feminism. We challenge structural oppression rooted in caste, religion, patriarchy, and poverty by creating spaces for women to share their stories, find solidarity, and reclaim power. Our feminism is grounded in lived realities, collective healing, and political resistance—not charity, but long-overdue justice.
      </p>
      <p className="font-[montserrat] font-light text-lg xl:text-xl text-right">
        Feminism for the margins is not charity. It is justice long overdue.
      </p>

      {learn_more && (
        <div
          className="flex flex-row justify-start items-center gap-1 hover:underline cursor-pointer mt-4"
          onClick={() => navigate("/about")}
        >
          <a className="font-[playfair] text-[1.4rem] lg:text-2xl">Learn More</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      )}
    </section>
  );
};

export default MissionCard;
