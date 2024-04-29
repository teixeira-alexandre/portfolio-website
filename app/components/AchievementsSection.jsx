"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    metric: "Users",
    value: "100",
    postfix: "~",
  },
  {
    metric: "Awards",
    value: "2",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border[##33353F] border rounded-md py-8 px16 flex flex-row items-center justify-between">
        {achievementsList.map((achievementsList, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievementsList.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievementsList.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                    };
                  }}
                  />
                  {achievementsList.postfix}
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
