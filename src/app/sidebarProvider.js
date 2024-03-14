
import React from "react";
import Sidebar from "../../component/Sidebar";

const SideBarProvider = ({ children }) => {
  return (
    <div>
      <Sidebar />
      
      {children}
    </div>
  );
};

export default SideBarProvider;
