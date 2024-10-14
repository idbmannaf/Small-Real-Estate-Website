import AuthDetails from "./AuthDeatils";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <>
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <a
                href="index.html"
                className="navbar-logo block w-60 max-w-full px-4"
              >
                <img
                  src="assets/images/logo/logo.svg"
                  alt="logo"
                  className="header-logo h-12"
                />
              </a>

              <NavItems />

              <AuthDetails />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
