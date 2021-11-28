import React from "react";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

const Error404 = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: null,
          footerStyle: "style3",
        }}
      >
        <div className="pt-24 pt-md-26 pb-15 pt-lg-33 pb-md-19 pb-lg-25">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
                <div className="text-center">
                  <h1
                    className="font-size-13 mb-8"
                    data-aos="fade-up"
                    data-aos-duration={700}
                  >
                    Gabim 404!
                  </h1>
                  <p
                    className="font-size-7 mb-0"
                    data-aos="fade-up"
                    data-aos-duration={900}
                  >
                    Kjo faqe nuk ekziston ose nuk është akoma gati, duhet te
                    shkosh në fillim.
                  </p>
                  <div className="">
                    <div
                      className="pt-11 max-w-322 mx-auto"
                      data-aos="fade-up"
                      data-aos-duration={1100}
                    >
                      <Link href="/">
                        <a className="btn btn-blue-3 btn-sm rounded-5 text-lily-white font-size-3 gr-hover-up">
                          Shko në fillim
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Error404;
