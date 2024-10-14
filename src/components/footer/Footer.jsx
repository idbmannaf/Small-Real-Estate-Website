import About from "./About";
import BrandDetails from "./BrandDetails";
import Features from "./Features";
import LatestBlog from "./LatestBlog";

const Footer = () => {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <BrandDetails />
          <About />
          <Features />
          <LatestBlog />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
