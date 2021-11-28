import React from "react";
import Link from "next/link";

import imageOne from "../../assets/image/main/png/list-faturat.png";

const ContentOne = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 order-2 order-lg-1">
            <div
              className="mt-13 mt-lg-0 pr pr-lg-0"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <h6 className="font-size-3 text-dodger-blue-1 text-uppercase mb-8 letter-spacing-5">
                Produkt i thjeshtëzuar
              </h6>
              <h2 className="font-size-10 mb-8 letter-spacing-n83 pr-sm-10 pr-md-0 text-dark-cloud">
                Shkon përtej pritshmërive të tua.
              </h2>
              <p className="font-size-7 mb-0 pr-sm-16 pr-md-15 pr-lg-19 pr-xl-20 text-stone">
                Njoftime automatike për pagesat në bank të faturave. Rikujtesë
                nëpërmjet email-it, të pagesave në pritje nga klientët biznes.
                Mundësi pafund për integrime me sisteme të tjera.
              </p>
              <div className="mt-12">
                <Link href="/#">
                  <a className="btn btn-blue-3 btn-2 rounded-5 gr-hover-up">
                    Provoje Tani <i className="ml-5 icon icon-stre-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-xl-6 col-lg-5 col-md-8 col-xs-11 order-1 order-lg-2">
            <div className="l5-content-2">
              <img
                className="w-100 rounded-4 w-120-c"
                src={imageOne}
                alt=""
                data-aos="flip-right"
                data-aos-delay={500}
              />
              <div
                className="image-card w-fit-content bg-white-op8 rounded-5 mb-5 d-flex align-items-center shadow-11 px-8 pt-7 pb-7 aos-init aos-animate"
                data-aos="zoom-in"
                data-aos-delay={500}
              >
                <div className="mr-6 circle-59 bg-dodger-blue-1-op1 text-dodger-blue-1 font-size-7">
                  <i className="fas fa-bell" />
                </div>
                <div className="content">
                  <h4 className="font-size-6 text-dark-cloud mb-0">
                    Pagesë Fature
                  </h4>
                  <p className="font-size-5 text-stone mb-0">
                    Fatura nr. 321/2021 u pagua plotësisht.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Right Image */}
        </div>
      </div>
    </div>
  );
};

export default ContentOne;
