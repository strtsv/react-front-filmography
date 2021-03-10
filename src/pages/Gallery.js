import React from "react";

import Header from "../components/Header";
import MyGallery from "../components/Gallery/MyGallery";
import UsefulInfo from "../components/Gallery/UsefulInfo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <MyGallery />
      <UsefulInfo />
      <Footer />
    </div>
  );
};

export default Home;
