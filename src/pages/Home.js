import React from "react";

import Header from "../components/Header";
import Slider from "../components/Home/Slider";
import Services from "../components/Home/Services";
import HandleAny from "../components/Home/HandleAny";
import BgVide from "../components/Home/BgVide";
import Products from "../components/Home/Products";
import Caption from "../components/Home/Caption";
import Offering from "../components/Home/Offering";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <Services />
      <HandleAny />
      <BgVide />
      <Products />
      <Caption />
      <Offering />
      <Footer />
    </div>
  );
};

export default Home;
