"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of learning experience",
    showPlus: false, // Don't show + for years
  },
  {
    num: 10,
    text: "Projects Completed",
    showPlus: true,
  },
  {
    num: 10,
    text: "Technologies explored",
    showPlus: true,
  },
  {
    num: 300,
    text: "Code commits",
    showPlus: true,
  },
];

export const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div className="flex items-end">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  {/* Conditionally render + sign */}
                  {item.showPlus && item.num >= 10 && (
                    <span className="text-2xl xl:text-4xl font-extrabold">
                      +
                    </span>
                  )}
                </div>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
