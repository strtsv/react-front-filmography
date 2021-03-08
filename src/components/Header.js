import React from "react";

import $ from "jquery";
import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/tmstickup.js";
import "../assets/js/jquery.ui.totop.my.js";

import i1 from "../assets/images/logo-default-249x35.png";
import i2 from "../assets/images/logo-inverse-248x35.png";
import i3 from "../assets/images/logo-default-249x35.png";
import i4 from "../assets/images/logo-inverse-248x35.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    new WOW().init();
    // $(".rd-navbar").TMStickUp({});
    $().UItoTop({
      easingType: "easeOutQuad",
      containerClass: "ui-to-top fa fa-angle-up",
    });
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <div className="rd-navbar-aside-outer rd-navbar-collapse bg-pattern-1">
              <div className="rd-navbar-aside">
                <div className="rd-navbar-brand">
                  {}
                  <a className="brand" href="index.html">
                    <img
                      className="brand-logo-dark"
                      src={i1}
                      alt
                      width={124}
                      height={17}
                    />
                    <img
                      className="brand-logo-light"
                      src={i2}
                      alt
                      width={124}
                      height={17}
                    />
                  </a>
                </div>
                <div className="small-text">official website</div>
              </div>
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand d-lg-none">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i3}
                        alt
                        width={124}
                        height={17}
                      />
                      <img
                        className="brand-logo-light"
                        src={i4}
                        alt
                        width={124}
                        height={17}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap w-lg-100">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Bio
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Experience
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              News
                            </a>
                            <ul className="rd-menu rd-navbar-dropdown">
                              <li className="rd-dropdown-item">
                                <a className="rd-dropdown-link" href="#">
                                  Archive
                                </a>
                              </li>
                              <li className="rd-dropdown-item">
                                <a className="rd-dropdown-link" href="#">
                                  Fresh
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about-me.html">
                          About Me
                        </a>
                      </li>
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="filmography.html">
                          Filmography
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
