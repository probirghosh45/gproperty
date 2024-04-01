import { useLoaderData } from "react-router-dom";
import Cover from "./Components/Cover/Cover";
import Estate from "./Components/Estate/Estate";
import Footer from "./Components/Shared/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  const estate = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Gpropety | Home Page</title>
      </Helmet>
      <Cover></Cover>
      <div className="w-11/12 my-10 mx-auto">
        <h1 data-aos="fade-up-right" className="my-8 text-2xl font-bold text-center text-basicColor">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5 ">
          {estate.map((na) => (
            <Estate key={na.id} estate={na}></Estate>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
