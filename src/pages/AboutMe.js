import React from "react";

import Header from "../components/Header";
import ShortlyAboutMe from "../components/AboutMe/ShortlyAboutMe";
import MyAwards from "../components/AboutMe/MyAwards";
import MyMissionValues from "../components/AboutMe/MyMissionValues";
import Biography from "../components/AboutMe/Biography";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="page animated">
      <Header />
      <ShortlyAboutMe />
      <MyAwards />
      <MyMissionValues />
      <Biography />
      <Footer />
    </div>
  );
};

export default AboutMe;
