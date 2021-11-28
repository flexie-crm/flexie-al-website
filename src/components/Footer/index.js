import React from "react";
import Link from "next/link";

import imgFS from "../../assets/image/inner-page/png/yellow-footer-shape.png";

const Footer = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={`bg-dark-cloud pt-13 pt-lg-27 pb-7 dark-mode-texts position-relative ${className}`}
        {...rest}
      >
        <div className="container">
          <div className="row pb-lg-25">
            <div className="col-lg-4 col-md-5 col-md-3 col-xs-8">
              <div className="pr-xl-20 mb-11 mb-lg-0 mt-lg-5">
                <div className="brand-logo mb-5">
                  <a href="https://flexie.io" target="_blank">
                    <svg
                      x="0px"
                      y="0px"
                      viewBox="0 0 588 156"
                      style={{ height: "55px", padding: "13px 0" }}
                    >
                      <rect
                        x="54"
                        y="61"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        width="102"
                        height="68"
                      ></rect>
                      <rect
                        x="54"
                        y="42"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        width="62"
                        height="114"
                      ></rect>
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#FFFFFF"
                          d="M7.091,0h142.186C153.076,0,156,3.123,156,6.921V70H84.704H69.539
            H68v86H7.091C3.293,156,0,152.905,0,149.107V6.921C0,3.123,3.293,0,7.091,0L7.091,0z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#FFFFFF"
                          d="M85,87v69h64.277c3.798,0,6.723-3.095,6.723-6.893V87H85z
             M146,121H90v-17h56V121z"
                        ></path>
                        <polygon
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#FFFFFF"
                          points="169,70 185,70 185,140 250,140 250,156 184.597,156 
            173.457,156 169,156     "
                        ></polygon>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#FFFFFF"
                          d="M262,70h11.52h4.365H350v16h-72v54h72v16h-72.115h-4.365H262V70z
             M341,105v16h-56v-16H341z"
                        ></path>
                        <rect
                          x="469"
                          y="70"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#FFFFFF"
                          width="15"
                          height="86"
                        ></rect>
                        <polygon
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#FFFFFF"
                          points="438.1,71 457.913,71 416.669,113.514 457.913,156 
            438.1,156 406.748,123.656 375.396,156 355.583,156 396.855,113.514 355.583,71 375.396,71 406.748,103.344     "
                        ></polygon>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          fill="#FFFFFF"
                          d="M500,70h11.573h4.394H588v16h-72v54h72v16h-72.033h-4.394H500V70z
             M579,105v16h-56v-16H579z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <p className="font-size-5 mb-0 text-bali-gray pr-sm-10 pr-md-0">
                  <b>Flexie CRM</b> rregullon marrëdhënien me klientët duke
                  dhënë nje pamje të plotë 360 grade. Gjithashtu ndihmon në
                  proçeset e punës.
                </p>
                <div className="mt-8">
                  <Link href="/#">
                    <a className="btn btn-blue-3 btn-sm rounded-5 text-lily-white font-size-3 gr-hover-up">
                      Na Kontakto
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 offset-xl-1">
              <div className="row">
                {/* Single Widgets */}
                <div className="col-md-4 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-normal mb-8 text-bali-gray">
                      Produkti
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-lily-white">
                            Termat dhe kushtet
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-lily-white">
                            Politika e privatësis
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-lily-white">
                            LinkedIn Group
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-lily-white">
                            Pyetjet e Shpeshta
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-md-3 col-xs-6">
                  <div className="mb-10 mb-lg-0">
                    <h4 className="font-size-6 font-weight-normal mb-8 text-bali-gray">
                      Rreth Nesh
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-lily-white">Skuadra</a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-lily-white">
                            Historia Jonë
                          </a>
                        </Link>
                      </li>
                      <li className="mb-6">
                        <Link href="/#">
                          <a className="font-size-5 text-lily-white">
                            Karriera
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Widgets */}
                {/* Single Widgets */}
                <div className="col-lg-5 col-md-5 col-xs-8">
                  <div className="mb-10 mb-lg-0 mr-xl-12">
                    <h4 className="font-size-6 font-weight-normal mb-8 text-bali-gray">
                      Kontakti
                    </h4>
                    <p className="font-size-5 mb-0 text-lily-white">
                      Na merr në telefon, ose na dërgo email, do t'ju
                      përgjigjemi shumë shpejt.
                    </p>
                    <div className="mt-7">
                      <Link href="tel:+1-301-340-3946">
                        <a className="font-size-5 d-block text-golden-yellow mb-0">
                          067 300 2887
                        </a>
                      </Link>
                      <Link href="mailto:info@finity.com">
                        <a className="font-size-5 d-block text-golden-yellow mb-0">
                          support@flexie.al
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Single Widgets */}
              </div>
            </div>
          </div>
          <div className="border-top">
            <div className="row align-items-center pt-7">
              <div className="col-lg-12 text-center text-lg-left">
                <div className="copyright">
                  <p className="mb-0 font-size-3 text-bali-gray">
                    Mundesuar nga <b>Flexie CRM</b> dhe <b>IVA Elektronik</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-yellow-shape-img">
          <img src={imgFS} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
