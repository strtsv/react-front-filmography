import React from "react";

import i1 from "../../assets/images/parallax-img-2.jpg";

class Biography extends React.Component {
  render() {
    return (
      <section
        className="parallax-container"
        data-parallax-img={i1}
        style={{
          backgroundImage: "url(" + i1 + ")",
        }}
      >
        <div className="parallax-content section section-md context-dark">
          <div className="container">
            <div className="text-center">
              <h3 className="title-text">Biography</h3>
            </div>
            <div className="row">
              <div className="col-sm-4 d-flex">
                <ul className="link-list mod-2">
                  <li>
                    <a href="#">January 1984</a>
                  </li>
                  <li>
                    <a href="#">February 1990</a>
                  </li>
                  <li>
                    <a href="#">March 1995</a>
                  </li>
                  <li>
                    <a href="#">April 1998</a>
                  </li>
                  <li>
                    <a href="#">May 2000</a>
                  </li>
                  <li>
                    <a href="#">June 2005</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 d-flex">
                <ul className="link-list mod-2">
                  <li>
                    <a href="#">July 2008</a>
                  </li>
                  <li>
                    <a href="#">August 2009</a>
                  </li>
                  <li>
                    <a href="#">September 2010</a>
                  </li>
                  <li>
                    <a href="#">October 2011</a>
                  </li>
                  <li>
                    <a href="#">November 2012</a>
                  </li>
                  <li>
                    <a href="#">December 2013</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 d-flex">
                <ul className="link-list mod-2">
                  <li>
                    <a href="#">January 2014</a>
                  </li>
                  <li>
                    <a href="#">February 2015</a>
                  </li>
                  <li>
                    <a href="#">March 2016</a>
                  </li>
                  <li>
                    <a href="#">April 2017</a>
                  </li>
                  <li>
                    <a href="#">May 2018</a>
                  </li>
                  <li>
                    <a href="#">June 2019</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Biography;
