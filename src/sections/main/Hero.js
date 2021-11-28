import React from "react";
import Link from "next/link";

import FaturaImage from "../../assets/image/main/png/fatura.png";
import YellowShape from "../../assets/image/main/png/yellow-shape.png";
import GreenShape from "../../assets/image/main/png/green-shape.png";

const Hero = ({ className, ...rest }) => {
  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div
              className="text-center mb-11 mb-lg-24"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <h1 className="font-size-11 mb-7">
                Thjesht, dhe vetëm{" "}
                <span style={{ color: "#006bff" }}>Fiskalizim.</span>
              </h1>
              <p className="font-size-7 px-lg-5 mb-0">
                Bën vetëm një gjë. Fiks atë që të duhet, lëshon faturat
                tatimore, <b>asgjë tjetër.</b>
              </p>
              <div className="btn-group d-inline-block mt-10">
                <Link href="/provoje">
                  <a className="btn btn-blue-3 btn-2 rounded-5 gr-hover-up">
                    Provoje Tani <i className="ml-5 icon icon-stre-right"></i>
                  </a>
                </Link>
                <p className="d-block mt-6 font-size-3 mb-0 text-bali-gray letter-spacing-reset">
                  Provoje <b>1 Muaj</b> falas, pa asnjë lloj detyrimi.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Image Group */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-xs-11">
            <div className="l3-hero-image-group w-100">
              {/* Image One */}
              <div
                className="img-1 shadow-13"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-once="true"
                data-aos-duration={500}
              >
                <img
                  style={{
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                  src={FaturaImage}
                  alt=""
                />
                {/* Image Two */}
                <div className="img-2">
                  <img
                    src={YellowShape}
                    alt=""
                    data-aos="fade-right"
                    data-aos-delay={300}
                    data-aos-once="true"
                    data-aos-duration={500}
                  />
                </div>
                {/* Image Three */}
                <div className="img-3">
                  <img
                    src={GreenShape}
                    alt=""
                    data-aos="fade-left"
                    data-aos-delay={400}
                    data-aos-once="true"
                    data-aos-duration={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
