/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Estate.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

const Estate = ({ estate }) => {
  const { id,estate_title,segment_name,description,price,status,area,location,facilities,img} =estate;
  useEffect(() => {
    AOS.init({
      duration: 1200
     });
  }, [])
  return (
    <div data-aos="fade-left"  className="flex flex-col">
      <figure data-aos="zoom-in" className=" h-56 w-full rounded-lg hover:opacity-30">
        <img  className=" h-56 w-full rounded-lg" src={img} alt="Shoes" />
      </figure>
      <div className="flex-grow py-2 ">
        <p className=" text-basicColor font-bold text-lg ">{estate_title}</p>
      </div>
      <div className="">
        <h2 className=" text-gray-500 text-base flex-grow">{segment_name}</h2>

        <div className="card-actions flex items-center justify-stretch mt-1">
          <Link to={`/estate/${id}`}>
            <button className="btn btn-sm capitalize btn-outline hover:bg-basicColor hover:outline-none hover:border-none border-basicColor text-basicColor text-base ">
              {" "}
              View Property
            </button>
          </Link>
          <h2 className=" font-bold text-white bg-basicColor px-2 rounded-lg" >Price:${price}</h2>
        </div>
      </div>
    </div>
  );
};
Estate.propTypes = {
  estate: PropTypes.array
}
export default Estate;
