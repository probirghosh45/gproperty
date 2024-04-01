import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import toast from "react-hot-toast";
import FacilitiesDetails from "./FacilitiesDetails";

const EstateDetails = () => {
  const estate = useLoaderData();
  const { id } = useParams();
  const idNum = parseInt(id);

  const individualEstate = estate.find((info) => info.id === idNum);
  const {estate_title,segment_name,description,price,status,area,location,facilities,img} =
  individualEstate;


    const handleAddToCart = () => {
      let storedData = JSON.parse(localStorage.getItem("data") || "[]");
      const isStored = storedData.find((b) => b.id === individualEstate.id);
  
      if (isStored) {
        toast.error("This item already added in the cart");
      } else {
        
        storedData.push(individualEstate);
        localStorage.setItem("data", JSON.stringify(storedData));
        toast.success("Item added in the cart successfully");
      }

      }
 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 max-w-6xl mx-auto gap-5 px-5 lg:px-0 py-5">
      <div className="col-span-2">
        <div className="border p-2 rounded-lg bg-slate-50 my-2 space-y-1 ">
          <h1 className="text-basicColor">
            <span className=" font-bold"> Status : </span> {status}
          </h1>

          <h1 className=" text-basicColor">
            <span className="font-bold ">Area : </span>
            {area}
          </h1>
        </div>
        <div className=" space-y-4 mt-10">
        <h2 className=" text-xl font-bold text-basicColor">{estate_title}</h2>
        <h3 className=" text-base font-bold text-basicColor">{segment_name}</h3>
          <p className=" text-base text-justify text-gray-500">{description}</p>
          <h1>Facilities Available - </h1>
            {
                facilities.map((Facility,idx)=><FacilitiesDetails className="text-slate-600" key={idx} Facility={Facility} />)
            }
        </div>
        <div className="card-actions flex items-center justify-stretch mt-4">
          <Link to={`/cart`}>
            <button onClick={handleAddToCart} className="btn btn-sm capitalize btn-outline hover:bg-basicColor hover:outline-none hover:border-none border-basicColor text-basicColor text-base w-40 h-14 ">
              {" "}
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto my-2 pb-20 lg:px-5 md:px-0 col-span-5">
        <div className="card space-y-3">
          <figure className="w-full h-84 rounded-lg ">
            <img
              className="w-full h-84 rounded-lg "
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="flex gap-2 items-center text-sm justify-end">
            <FaLocationDot />
            <h1 className=" font-bold">{location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
