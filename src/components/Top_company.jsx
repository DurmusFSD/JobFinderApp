import { HiOutlineHeart, HiStar } from "react-icons/hi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  module: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Top_company() {
  const Jobs = ({ type, img, title, color, bg_color }) => {
    return (
      <div className="shadow lg:w-[95%] mt-12">
        <div className="bg-white rounded-t-md px-6 py-8 flex flex-col items-center">
          <span className="flex items-center justify-between w-full">
            <button
              className="rounded-full bg-transparent text-lg text-black px-8 py-2 outline-none border-none hoverBtn"
              style={{ border: `3px solid ${color}` }}
            >
              {type}
            </button>
            <HiOutlineHeart className="text-3xl" />
          </span>
          <img src={img} alt="" className="w-28 h-28 rounded-full my-8" />
        </div>
        <div
          className="rounded-b-md px-6 py-8"
          style={{ backgroundColor: `${bg_color}` }}
        >
          <p className="text-2xl font-semibold">{title}</p>
          <p className="py-2 text-lg">803 46th St Brooklyn, NY</p>
          <div className="pb-4 flex flex-wrap">
            {[...Array(5)].map((_, index) => {
              return (
                <HiStar key={index} className="text-[#FFCC02] text-2xl " />
              );
            })}
          </div>
          <div className="p-2 border border-solid border-[#e2e4e7] rounded-md flex justify-between text-sm">
            <p>Salary</p>
            <p style={{ color: `${color}` }}>Rs. 3,457.00</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#fafbfc]">
      <div className="container mx-auto px-6 py-24">
        <div className="md:flex items-center justify-between">
          <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
            Top Company Registered
          </h2>
          <span className="md:flex gap-x-4">
            <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">
              Browse Jobs
            </button>
            <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">
              See all companies
            </button>
          </span>
        </div>
        <p className="text-2xl mt-4 font-light">
          Know your worth and find the job that qualify your life
        </p>
        <div>
          <Carousel
            swipeable={true}
            draggable={false}
            responsive={responsive}
            ssr={true}
            infinite
            showDots
            autoPlay={true}
            arrows={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
          >
            <Jobs
              bg_color="#f4f4ff"
              color="#4b4efc"
              img="/google2.png"
              title="Product Design"
              type="Internship"
            />
            <Jobs
              bg_color="#fffbf2"
              color="#fec220"
              img="/pinterest.png"
              title="Product Mockup"
              type="Internship"
            />
            <Jobs
              bg_color="#fbf2f6"
              color="#c72b66"
              img="/spotify.png"
              title="Web Maintenance"
              type="Full Time"
            />
            <Jobs
              bg_color="#c8f3ea"
              color="#349c30"
              img="/dribble1.png"
              title="PHP Developer"
              type="Remote"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
