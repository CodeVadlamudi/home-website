import React from "react";

function Hero() {
  return (
    <section className="lg:my-20 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div
          style={{backgroundImage: "url('./images/hero.png')"}}
          className="h-[650px] relative rounded-ss-[100px] rounded-ee-[100px] flex items-center justify-center p-5"
        >
          <div className="bg-white/80 p-10 space-y-4 max-w-screen-sm rounded-ss-[50px] rounded-ee-[50px]">
            <h2 className="text-2xl md:text-3xl">
              Let's make your home beautiful together!
            </h2>
            <p>
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Mollitia perferendis ipsa harum optio quis a ut
              vitae, aperiam quae corporis provident.
            </p>
            <button className="w-56 h-16 bg-antiqueColor">Get started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
