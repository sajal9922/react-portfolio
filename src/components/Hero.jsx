// @copyright 2024 shamsul alam
// @license Apache-2

import {
  avaterSmall,
  heroBanner,
  heroBanner2,
  download,
  arrowDown,
  herobanner3,
} from '../assets';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex gap-3 items-center">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                className="img-cover"
                width={40}
                height={40}
                src={avaterSmall}
                alt=""
              />
            </figure>
            <div className=" flex items-center gap-1.5 text-sm text-zinc-400 tracking-wide ">
              <span className=" relative h-2 w-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0  rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] lg:max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className=" flex items-center gap-3">
            <Button
              label="Download CV"
              icon={<img className="h-5" src={download} alt="download" />}
              classes="btn-primary"
            />
            <Button
              href="#about"
              label="Scroll Down"
              classes="btn-outline"
              icon={<img className="h-4" src={arrowDown} alt="download" />}
            />
          </div>
        </div>

        <div className="hidden lg:block  ">
          <figure className="w-full max-w-[410px] rounded-[60px] overflow-hidden ml-auto bg-gradient-to-t   via-sky-400 via-65% shadow-lg shadow-zinc-800 ">
            <img
              width={656}
              height={800}
              src={herobanner3}
              alt="shamsul alam"
              className=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
