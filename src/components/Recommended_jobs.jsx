import { IoLocateOutline } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { LiaDotCircle } from "react-icons/lia";
import { HiOutlineHeart } from "react-icons/hi";

export default function Recommended_jobs() {
  const Categories = ({ image, title, opening }) => {
    return (
      <div className="bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-3xl">
        <span className="flex items-center gap-x-4">
          <img src={image} alt="" width={30} /> <p>{title}</p>
        </span>
        <p>{opening} Opening</p>
      </div>
    );
  };

  const Recommended = ({
    time,
    type,
    title,
    amount,
    country,
    job,
    bgColor,
    color,
  }) => {
    return (
      <div
        className="w-full rounded-[10px] shadow"
        style={{ borderLeft: `6px solid ${color}` }}
      >
        <div className="bg-white w-full p-8 rounded-t-[10px]">
          <span className="flex items-start justify-between">
            <span className="flex-1 md:flex items-start lg:gap-x-8 gap-x-4 lg:text-2xl text-lg">
              <button
                className="p-4 rounded-md border-none outline-none md:mb-0 mb-4"
                style={{ backgroundColor: `${bgColor}` }}
              >
                <GrAnnounce size={30} style={{ color: `${color}` }} />
              </button>
              <p>Type: {type}</p> <p>Time: {time} years ago</p>
            </span>
            <HiOutlineHeart className="text-2xl" />
          </span>
          <div className="md:pl-24">
            <p className="text-2xl font-semibold md:mt-0 mt-4">{title}</p>
            <p className="text-2xl pt-4">Euro {amount} / yearly</p>
          </div>
        </div>
        <div
          className="py-8 px-6 flex-1 md:flex justify-between rounded-b-[10px] border border-solid border-[#e2e4e7]"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className="flex-1 md:flex items-center gap-x-8 text-2xl">
            <span className="flex items-center gap-x-3">
              <IoLocateOutline
                className="text-2xl"
                style={{ color: `${color}` }}
              />
              <p className="text-xl font-light">{country}</p>
            </span>
            <span className="flex items-center gap-x-3 lg:py-0 py-4">
              <LiaDotCircle
                className="text-2xl"
                style={{ color: `${color}` }}
              />
              <p className="text-xl font-light">{job}</p>
            </span>
          </div>
          <button className="rounded-full bg-white border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">
            Apply Now
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#f5f6fc]">
      <div className="container mx-auto px-6 py-24">
        <div className="md:flex items-center justify-between">
          <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">
            Recommended job
          </h2>
          <span className="md:flex gap-x-4">
            <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">
              Latest Job
            </button>
            <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">
              Premium Job
            </button>
          </span>
        </div>
        <p className="text-2xl mt-4 font-light">
          Explore suggested job searches
        </p>
        <div className="xl:flex gap-x-8 mt-16">
          <div className="xl:w-2/5">
            <div className="bg-white rounded-[10px] py-8 pl-6 mb-4">
              <h2 className="text-4xl font-semibold">Job Category</h2>
            </div>
            <div className="flex flex-col gap-y-4">
              <Categories image="/bus.png" opening="3" title="Automotive" />
              <Categories
                image="/heart.png"
                opening="1"
                title="Health and care"
              />
              <Categories
                image="/construction.png"
                opening="2"
                title="Construction"
              />
              <Categories
                image="/fitness.png"
                opening="1"
                title="Fitness Trainer"
              />
              <Categories image="/train.png" opening="0" title="Industry" />
              <Categories image="/bus.png" opening="3" title="Automotive" />
              <Categories
                image="/heart.png"
                opening="1"
                title="Health and care"
              />
              <Categories
                image="/construction.png"
                opening="2"
                title="Construction"
              />
            </div>
          </div>
          <div className="xl:w-3/5 flex flex-col gap-y-3 xl:mt-0 mt-4">
            <Recommended
              amount="3000-5000"
              bgColor="#f4f4ff"
              color="#4b4efc"
              country="Türkiye"
              job="Construction"
              time="4"
              title="Project manager"
              type="Temporary"
            />
            <Recommended
              amount="1000-2000"
              bgColor="#fbf2f6"
              color="#b70041"
              country="Australia"
              job="Development, Apps"
              time="2"
              title="Assistant manager"
              type="Internship"
            />
            <Recommended
              amount="2000-4000"
              bgColor="#fffbf2"
              color="#ffb800"
              country="USA"
              job="Engineering"
              time="1"
              title="IOS Engineer Backup"
              type="Contract"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
