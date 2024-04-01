import imgfooter from "../../assets/gproperty.png";
import { GoStopwatch } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-basicColor text-white">
      <aside>
       <div className="flex">
       <div><img className="h-5 lg:h-12" src={imgfooter} alt="" /></div>
       <div><p className=" font-bold text-4xl">GProperty</p></div>
       </div>
        <div className=" space-y-2">
          <p className="flex items-center gap-1 text-base"><GoStopwatch></GoStopwatch> Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
          <p className="flex items-center gap-1 text-base"><BsFillTelephoneFill></BsFillTelephoneFill> 1-677-124-44227</p>
          <p className="flex items-center gap-1 text-base"><FaLocationDot /> 826 Home Street, Bronx, New York</p>
          <p></p>
        </div>
      </aside>
      <nav>
        <header className="footer-title">Pages</header>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/faq" className="link link-hover">Faq</Link>
        <Link to="/about" className="link link-hover">About</Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
