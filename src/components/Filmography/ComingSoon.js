import React from "react";

import i from "../../assets/images/coming-soon-img-1-970x212.jpg";
import i1 from "../../assets/images/parallax-img-3.jpg";

class ComingSoon extends React.Component {
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
              <h3 className="title-text">Coming soon</h3>
            </div>
            <div className="row row-40 text-center">
              <div className="col-12">
                <img src={i} alt width={970} height={212} />
                <h6>
                  Fermentum leo, eu condimentum sapien quam eu enim pellentesque
                  congue, risus eu semper
                </h6>
                <p className="text-gray-300">
                  Cumaser kertyase socisera natoqu eagnis dist mte dulmuese
                  feugiata lecenaser mutrease stricies phaser datyfena nec sit
                  amm easer erment. Utdolores urliquam eratesasvpatis. Miastas
                  kertyase fertasbertas kertyasera miasears letase.
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

export default ComingSoon;
