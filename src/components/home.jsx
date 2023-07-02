import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import earthImage from "./earth-11595.jpg";

const Home = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "80vh",
        backgroundImage: `url(${earthImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-light text-center fs-4">
        Welcome to this project built with the Highcharts library. This project
        is a data visualization of JSON data. The JSON file contains data on the
        global population by country.
      </h1>
    </div>
  );
};

export default Home;
