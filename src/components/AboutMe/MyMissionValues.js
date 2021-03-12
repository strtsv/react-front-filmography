import React from "react";

import i1 from "../../assets/images/box-liza-img-01-200x174.jpg";
import i2 from "../../assets/images/box-liza-img-02-200x174.jpg";
import i3 from "../../assets/images/box-liza-img-03-200x174.jpg";
import i4 from "../../assets/images/box-liza-img-04-200x174.jpg";

class MyMissionValues extends React.Component {
  render() {
    return (
      <section className="section section-md bg-pattern-1">
        <div className="container">
          <div className="text-center">
            <h3 className="title-text">My mission & values</h3>
          </div>
          <div className="row row-40 justify-content-center">
            <div className="col-sm-6 col-md-3">
              <div className="box-liza">
                <img src={i1} alt width={200} height={174} />
                <div className="box-liza-text">
                  <h4 className="text-gray-790">
                    <a className="link-1" href="#">
                      Pellentesque
                    </a>
                  </h4>
                  <p className="lh-1 text-gray-500">
                    Vivamus porta orci sapien, eu volutpat neque tincide.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="box-liza">
                <img src={i2} alt width={200} height={174} />
                <div className="box-liza-text">
                  <h4 className="text-gray-790">
                    <a className="link-1" href="#">
                      Etiam interdu
                    </a>
                  </h4>
                  <p className="lh-1 text-gray-500">
                    Maecenas pretium dignissi placerat velit ac leo iaculi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="box-liza">
                <img src={i3} alt width={200} height={174} />
                <div className="box-liza-text">
                  <h4 className="text-gray-790">
                    <a className="link-1" href="#">
                      Ipsum id finibus
                    </a>
                  </h4>
                  <p className="lh-1 text-gray-500">
                    Duis placerat Integer eros laoreet, placerat nunc vel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="box-liza">
                <img src={i4} alt width={200} height={174} />
                <div className="box-liza-text">
                  <h4 className="text-gray-790">
                    <a className="link-1" href="#">
                      Finibu faucibus
                    </a>
                  </h4>
                  <p className="lh-1 text-gray-500">
                    Porta orci polutpat neque tincideunt ac, maecenas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyMissionValues;
