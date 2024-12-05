import { avaterSmall, heroBanner } from '../assets';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="">
            <figure className="">
              <img
                className="img-cover"
                width={40}
                height={40}
                src={avaterSmall}
                alt=""
              />
            </figure>
            <div className="">
              <span className="">
                <span className=""></span>
              </span>
              Available for work
            </div>
          </div>
          <h2>Building Scalable Modern Websites for the Future</h2>
          <div className="">ButtonPrimary ButtonOutline</div>
        </div>

        <div className="">
          <figure className="">
            <img
              width={656}
              height={800}
              src={heroBanner}
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
