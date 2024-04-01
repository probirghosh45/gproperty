import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";


const Root = () => {
  return (
    <div className="font-basicFont">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
