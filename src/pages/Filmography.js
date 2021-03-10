import React from "react";

import Header from "../components/Header";
import Recent from "../components/Filmography/Recent";
import ComingSoon from "../components/Filmography/ComingSoon";
import MostPopular from "../components/Filmography/MostPopular";
import Divider from "../components/Filmography/Divider";
import Footer from "../components/Footer";

const Filmography = () => {
  return (
    <div className="page animated">
      <Header />
      <Recent />
      <ComingSoon />
      <MostPopular />
      <Divider />
      <Footer />
    </div>
  );
};

export default Filmography;
