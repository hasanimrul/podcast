import Sidebar from "@/components/layouts/sidebar/sidebar";
import React from "react";

const Main = (props) => {
  return (
    <div className="main-wrapper boxed-content">
      <Sidebar />
      {props.children}
    </div>
  );
};

export default Main;
