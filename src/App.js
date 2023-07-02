import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MyChart from "./components/MyChart";
import MyChart1 from "./components/MyChart1";
import MyChart2 from "./components/MyChart2";
import MyChart3 from "./components/MyChart3";
import MyChart4 from "./components/MyChart4";
import Header from "./components/header.jsx";
import Footer from "./components/footer";
import Home from "./components/home";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mychart" element={<MyChart />} />
          <Route path="/mychart1" element={<MyChart1 />} />
          <Route path="/mychart2" element={<MyChart2 />} />
          <Route path="/mychart3" element={<MyChart3 />} />
          <Route path="/mychart4" element={<MyChart4 />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
