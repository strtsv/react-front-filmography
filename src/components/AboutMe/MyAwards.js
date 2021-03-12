import React from "react";

class MyAwards extends React.Component {
  render() {
    return (
      <section className="section section-md context-dark bg-gray-800">
        <div className="container">
          <div className="text-center">
            <h3 className="title-text">my awards</h3>
          </div>
          <div className="row row-50">
            <div className="col-sm-6 col-lg-4">
              <div className="box-feta">
                <div className="box-feta-icon">
                  <span className="icon fa fa-trophy icon-lg text-gray-450" />
                </div>
                <h6 className="text-uppercase">
                  Donec magna quam, convallis vitae placerat quis, pos
                </h6>
                <p className="text-gray-300">
                  Koleacene anritma hasesera deyulety. Cumas er kertyase
                  socisera natoqu eagnis dist mte nertyaer dertasera niytrasasa
                  derodes Integer miasears letase.
                </p>
                <a className="button button-radius button-primary" href="#">
                  more
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="box-feta">
                <div className="box-feta-icon">
                  <span className="icon fa-video-camera icon-lg text-gray-450" />
                </div>
                <h6 className="text-uppercase">
                  Vestibulum ante ipsum primis cibus orci luctus et
                </h6>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nam aliquam sem et tortor miasears.
                </p>
                <a className="button button-radius button-primary" href="#">
                  more
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="box-feta">
                <div className="box-feta-icon">
                  <span className="icon fa-calendar icon-lg text-gray-450" />
                </div>
                <h6 className="text-uppercase">
                  Ante ipsum primis faucibus orci ctus et ultrices posuere
                </h6>
                <p className="text-gray-300">
                  Hac habitasse platea dictumst vestibulum rhoncus est.
                  Elementum integer enim neque volutpat ac tincidunt. Egestas
                  integer eget aliquet nibh praesent. Risus at ultrices.
                </p>
                <a className="button button-radius button-primary" href="#">
                  more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyAwards;
