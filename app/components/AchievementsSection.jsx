import React from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: "100+",
  },
  {
    metric: "Users",
    value: "1M+",
  },
  {
    metric: "Awards",
    value: "10+",
  },
  {
    metric: "Years",
    value: "2+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border[##33353F] border rounded-md py-8 px17 flex flex-row items-center justify-between">
        {achievementsList.map((achievementsList, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievementsList.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">
                {achievementsList.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
