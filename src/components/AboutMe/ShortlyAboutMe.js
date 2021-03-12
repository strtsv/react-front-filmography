import React from "react";

import i from "../../assets/images/box-nina-img-01-370x287.jpg";

class ShortlyAboutMe extends React.Component {
  render() {
    return (
      <section className="section section-md bg-pattern-1">
        <div className="container">
          <div className="text-center">
            <h3 className="title-text">Shortly about me</h3>
          </div>
          <div className="row row-40 justify-content-center">
            <div className="col-12">
              <div className="box-nina">
                <div className="box-nina-media text-center">
                  <img src={i} alt width={370} height={287} />
                </div>
                <div className="box-nina-text">
                  <h4 className="text-gray-790">
                    Suspendisse et magna lobortis, gravida justo in, consect
                    etur ante. Vivamus sit amet lobortis lorem
                  </h4>
                  <h6 className="lh-1 text-gray-500">
                    Pellentesque ultricies felis purus, id eleifend dolor
                    consequat ac. Etiam cursus augue eget sem condimentum, non
                    volutpat lacus fermentum. Fusce facilisis mi eget posuere
                    interdum. Etiam interdum ipsum id finibus faucibus. Nulla
                    nec magna mollis enim cursus commodo nec id dui. Mauris
                    venenatis cursus nulla. Quisque euismod dolor eu risus
                    euismod consequat. Sed diam nunc, finibus et ultricies in,
                    tempus quis sem.
                  </h6>
                  <a className="button button-radius button-fourth" href="#">
                    more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ShortlyAboutMe;
