import { useEffect } from "react";
import cover1 from "../../assets/home-cover-1.jpg";
import cover2 from "../../assets/home-cover-2.jpg";
import cover3 from "../../assets/home-cover-3.jpg";
import cover4 from "../../assets/home-cover-4.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cover = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000
     });
  }, [])
  return (
    <div data-aos="fade-right" className="carousel h-64 lg:h-128">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={cover1}
          className=" w-full h-64 lg:h-128 opacity-30"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-56 lg:top-1/2">
          <a
            href="#slide4"
            className="text-4xl btn btn-outline bg-none hover:bg-basicColor hover:border-none text-basicColor"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
          >
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center lg:w-8/12 text-center lg:top-36 lg:left-48">
          <div className="flex-row ">
            <h1 className=" font-extrabold text-2xl mt-5 lg:text-5xl text-basicColor">
            Welcome to your home , a sanctuary of health and happiness
            </h1>
            <div className="join mt-3 lg:mt-10 w-full justify-center">
              <input
                className="input input-bordered join-item w-6/12 border-none"
                placeholder="Services"
              />
              <button className="btn bg-basicColor capitalize text-white font-bold text-lg lg:text-xl border-none focus:outline-none join-item rounded-r-full w-2/12">
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={cover3}
          className="w-full h-64 lg:h-128 opacity-30"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-56 lg:top-1/2">
          <a
            href="#slide1"
            className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
          >
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center lg:w-8/12 text-center lg:top-36 lg:left-48">
          <div className="flex-row ">
            <h1 className=" font-extrabold text-2xl mt-5 lg:text-5xl text-basicColor">
            Welcome to your home , a sanctuary of health and happiness
            </h1>
            <div className="join mt-3 lg:mt-10 w-full justify-center">
              <input
                className="input input-bordered join-item w-6/12 border-none"
                placeholder="Services"
              />
              <button className="btn bg-basicColor capitalize text-white font-bold text-lg lg:text-xl border-none focus:outline-none join-item rounded-r-full w-2/12">
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={cover2}
          className="w-full h-64 lg:h-128 opacity-30"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-56 lg:top-1/2">
          <a
            href="#slide2"
            className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
          >
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center lg:w-8/12 text-center lg:top-36 lg:left-48">
          <div className="flex-row ">
            <h1 className=" font-extrabold text-2xl mt-5 lg:text-5xl text-basicColor">
            Welcome to your home , a sanctuary of health and happiness
            </h1>
            <div className="join mt-3 lg:mt-10 w-full justify-center">
              <input
                className="input input-bordered join-item w-6/12 border-none"
                placeholder="Services"
              />
              <button className="btn bg-basicColor capitalize text-white font-bold text-lg lg:text-xl border-none focus:outline-none join-item rounded-r-full w-2/12">
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={cover4}
          className="w-full h-64 lg:h-128 opacity-30"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-56 lg:top-1/2">
          <a
            href="#slide3"
            className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
          >
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center lg:w-8/12 text-center lg:top-36 lg:left-48">
          <div className="flex-row ">
            <h1 className=" font-extrabold text-2xl mt-5 lg:text-5xl text-basicColor">
            Welcome to your home , a sanctuary of health and happiness
            </h1>
            <div className="join mt-3 lg:mt-10 w-full justify-center">
              <input
                className="input input-bordered join-item w-6/12 border-none"
                placeholder="Services"
              />
              <button className="btn bg-basicColor capitalize text-white font-bold text-lg lg:text-xl border-none focus:outline-none join-item rounded-r-full w-2/12">
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;