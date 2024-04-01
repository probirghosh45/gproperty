import { Helmet } from "react-helmet";
import Estate from "../Estate/Estate";

const Cart = () => {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data);
  return (
    <div>
    <Helmet>
        <title>Gpropety | Cart</title>
    </Helmet>

      <div className="w-11/12 my-10 mx-auto">
        <h1
          data-aos="fade-up-right"
          className="my-8 text-2xl font-bold text-center text-basicColor"
        >
          Confirm Your Order
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 ">
          {data.map((info) => (
            <Estate key={info.id} estate={info}></Estate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
