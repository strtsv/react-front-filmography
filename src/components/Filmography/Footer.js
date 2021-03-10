import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic">
        <div className="container">
          <div className="footer-classic-inner">
            <a href="index.html">
              <img
                src="images/logo-default-249x35.png"
                alt
                width={249}
                height={35}
              />
            </a>
          </div>
          <div className="offset-top-30">
            <p className="rights">
              <span>© </span>
              <span className="copyright-year" />
              <span> </span>
              <span>|</span>
              <span> </span>
              <a href="privacy-policy.html">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
