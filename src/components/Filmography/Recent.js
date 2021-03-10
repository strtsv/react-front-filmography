import React from "react";

import i1 from "../../assets/images/box-kira-img-01-570x216.jpg";
import i2 from "../../assets/images/box-kira-img-02-570x216.jpg";
import i3 from "../../assets/images/box-kira-img-03-570x216.jpg";
import i4 from "../../assets/images/box-kira-img-04-570x216.jpg";

class Recent extends React.Component {
  render() {
    return (
      <section className="section section-md bg-pattern-1">
        <div className="container">
          <div className="text-center">
            <h3 className="title-text">Recent films</h3>
          </div>
          <div className="row row-40 justify-content-center">
            <div className="col-sm-10 col-lg-6">
              <img src={i1} alt width={570} height={216} />
              <div className="box-kira">
                <div className="box-kira-left">
                  <div className="number">12</div>
                  <div className="text">March</div>
                </div>
                <div className="box-kira-right">
                  <h4 className="text-gray-790">
                    <a className="link-1" href="#">
                      Miuasa doloert euyaseras
                    </a>
                  </h4>
                  <h6 className="lh-1 text-gray-500">
                    Beciegast nveriti vitaesaert viasead asety kertya aset
                    aplicaboserde miuas nerafae kertye rauas vitaesa ertyatya
                    nemo eniptaiades.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-lg-6">
              <img src={i2} alt width={570} height={216} />
              <div className="box-kira">
                <div className="box-kira-left">
                  <div className="number">14</div>
                  <div className="text">August</div>
                </div>
                <div className="box-kira-right">
                  <h4 className="text-gray-790">
                    <a className="link-1" href="#">
                      Ferrode miuytasa leurytes
                    </a>
                  </h4>
                  <h6 className="lh-1 text-gray-500">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Nulla tristique ligula ut
                    velit pharetra condimentum.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-lg-6">
              <img src={i3} alt width={570} height={216} />
              <div className="box-kira">
                <div className="box-kira-left">
                  <div className="number">16</div>
                  <div className="text">October</div>
                </div>
                <div className="box-kira-right">
                  <h4 className="text-gray-790">
                    <a className="link-1" href="#">
                      Sed facilisis purus vel cursus
                    </a>
                  </h4>
                  <h6 className="lh-1 text-gray-500">
                    Maecenas nec justo augue. Sed ex purus, semper primis in
                    faucibus orci luctus et ultrices posuere cubilia tristique
                    ligula ut velit.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-10 col-lg-6">
              <img src={i4} alt width={570} height={216} />
              <div className="box-kira">
                <div className="box-kira-left">
                  <div className="number">20</div>
                  <div className="text">October</div>
                </div>
                <div className="box-kira-right">
                  <h4 className="text-gray-790">
                    <a className="link-1" href="#">
                      Purus vel cursus commod
                    </a>
                  </h4>
                  <h6 className="lh-1 text-gray-500">
                    Nulla tristique ligula ut velit pharetra condimentum, bitur
                    magna turpis, interdum a nibh sit amet, ornare luc tus
                    mauris. In sed accumsan felis.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recent;
