import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-5 bg-amber-100 text-base-content rounded-t-xl">
        <div className="md:flex items-center text-amber-600 font-semibold">
          <p>Copyright © 2024 - All right reserved by</p> <Logo></Logo>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
