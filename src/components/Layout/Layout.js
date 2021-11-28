import React, { useState, useEffect, useContext, useRef } from "react";

import styled from "styled-components";
import Head from "next/head";
import AOS from "aos";

import Header from "../Header";
import HeaderMini from "../HeaderMini";
import Footer from "../Footer";

import GlobalContext from "../../context/GlobalContext";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );

    return () => {};
  }, [gContext]);

  if (pageContext.layout === "mini") {
    return (
      <>
        <Head>
          <title>Fatura | Flexie CRM</title>
          <link rel="icon" href="/images/favicon.ico" type="image/icon" />
        </Head>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"} />

        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <HeaderMini />
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Fatura | Flexie CRM</title>
        <link rel="icon" href="/images/favicon.ico" type="image/icon" />
      </Head>
      <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
      <div className="site-wrapper overflow-hidden" ref={eleRef}>
        <Header />
        {children}
        <Footer className={gContext.theme.footerClassName} />
      </div>
    </>
  );
};

export default Layout;
