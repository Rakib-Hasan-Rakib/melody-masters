import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/navbar/Navbar";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default LayOut;
