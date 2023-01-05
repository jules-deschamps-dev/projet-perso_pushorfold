import React from "react";
import Matrice from "../components/Matrice";
import Array from "../components/Array";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className="home-page">
      <Nav />
      <div className="flex lg:flex-row flex-col sm:w-full md:w-4/5 lg:w-5/6 items-center justify-center m-auto bg-black bg-opacity-70 md:bg-opacity-75">
        <div className="flex w-full h-screen relative items-center justify-center">
          <Array />
        </div>
        <div className="flex w-full h-screen relative items-center justify-center">
          <Matrice />
        </div>
      </div>
    </div>
  );
};

export default Home;
