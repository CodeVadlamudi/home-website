import {ArrowRightIcon} from "@heroicons/react/24/outline";
import React from "react";

function Hero() {
  return (
    <section className="my-10 lg:my-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div
          style={{backgroundImage: "url('./images/hero.png')"}}
          className="h-[650px] relative rounded-ss-[100px] rounded-ee-[100px] flex items-center justify-center p-5"
        >
          <div className="bg-white/80 p-8 md:p-10 space-y-4 max-w-screen-sm rounded-ss-[50px] rounded-ee-[50px]">
            <h2 className="text-3xl md:text-3xl">
              Let's make your home beautiful together!
            </h2>
            <p className="md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              architecto facere atque sapiente corrupti dignissimos beatae,
              possimus quis maxime, dolores omnis cumque aut molestiae
              temporibus ipsum numquam optio quasi neque.
            </p>
            <button className="w-full sm:w-56 h-14 md:h-16 bg-antiqueColor flex items-center justify-center text-white text-lg rounded-md border-2 border-antiqueColor hover:bg-transparent hover:border-2 hover:border-antiqueColor hover:text-black duration-200">
              Get started <ArrowRightIcon className="w-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
