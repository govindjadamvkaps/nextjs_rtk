import Navbar from "../../component/Navbar";
import React from "react";

const NavBarProvider = ({ children }) => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      {children}
    </div>
  );
};

export default NavBarProvider;
