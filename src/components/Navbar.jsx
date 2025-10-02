import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="container py-5 content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <Logo></Logo>
      <nav>
        <ul className="flex gap-10 md:gap-16 ">
          <li className="">
            <a
              href="#"
              className="border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
            >
              Orders
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
            >
              Foods
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
            >
              Tables
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="border-b-3 rounded-lg border-[#fcb802] p-1 duration-200 hover:font-bold"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
