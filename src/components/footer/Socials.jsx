import Facebook from "../svg/socials/Facebook";
import Instagram from "../svg/socials/Instagram";
import Linkedin from "../svg/socials/Linkedin";
import Twitter from "../svg/socials/Twitter";

const Socials = () => {
  return (
    <div className="-mx-3 flex items-center">
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <Facebook width="22" height="22" />
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <Twitter width="22" height="22" />
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <Instagram width="22" height="22" />
      </a>
      <a
        href="javascript:void(0)"
        className="px-3 text-gray-7 hover:text-white"
      >
        <Linkedin width="22" height="22" />
      </a>
    </div>
  );
};

export default Socials;
