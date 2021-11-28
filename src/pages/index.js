import React from "react";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/main/Hero";
import Feature from "../sections/main/Feature";
import ContentOne from "../sections/main/ContentOne";
import Pricing from "../sections/main/Pricing";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-right",
          headerButton: null,
          footerStyle: "style3",
        }}
      >
        <Hero className="bg-default-3 pt-25 pt-lg-29" />
        <Feature className="pt-10 pt-lg-18 pb-15 pb-lg-15 border-bottom border-default-color-3" />
        <ContentOne className="pt-10 pt-lg-20 pb-15 pb-lg-20 bg-pattens-blue" />
        <Pricing className="pt-13 pt-lg-25 pb-8 pb-lg-22 " />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
