import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import Menu from "./Menu";
import NestedMenu from "../NestedMenu";

const SiteHeader = styled.header``;

const ToggleButton = styled.button``;

const Header = () => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

  return (
    <>
      <SiteHeader
        className={`site-header ${
          gContext.theme.headerClassName
        } px-7 px-lg-10 dynamic-sticky-bg site-header--absolute site-header--sticky

        ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header " : ""
        }`}
      >
        <Container>
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg  px-0">
            <div className="brand-logo mt-3 mt-md-0 d-flex align-items-center">
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 588 156"
                style={{ height: "55px", padding: "13px 0" }}
              >
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#099BE3"
                    d="M7.091,0h142.186C153.076,0,156,3.123,156,6.921V70H84.704H69.539
            H68v86H7.091C3.293,156,0,152.905,0,149.107V6.921C0,3.123,3.293,0,7.091,0L7.091,0z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#099BE3"
                    d="M85,87v69h64.277c3.798,0,6.723-3.095,6.723-6.893V87H85z
             M146,121H90v-17h56V121z"
                  ></path>
                  <polygon
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#099BE3"
                    points="169,70 185,70 185,140 250,140 250,156 184.597,156 
            173.457,156 169,156     "
                  ></polygon>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#099BE3"
                    d="M262,70h11.52h4.365H350v16h-72v54h72v16h-72.115h-4.365H262V70z
             M341,105v16h-56v-16H341z"
                  ></path>
                  <rect
                    x="469"
                    y="70"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#099BE3"
                    width="15"
                    height="86"
                  ></rect>
                  <polygon
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#099BE3"
                    points="438.1,71 457.913,71 416.669,113.514 457.913,156 
            438.1,156 406.748,123.656 375.396,156 355.583,156 396.855,113.514 355.583,71 375.396,71 406.748,103.344     "
                  ></polygon>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#099BE3"
                    d="M500,70h11.573h4.394H588v16h-72v54h72v16h-72.033h-4.394H500V70z
             M579,105v16h-56v-16H579z"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="collapse navbar-collapse">
              <div className="navbar-nav-wrapper">
                <Menu />
              </div>
            </div>

            {gContext.theme.headerButton && (
              <div className="header-btn ml-auto ml-lg-0 d-none d-xs-block">
                {gContext.theme.headerButton}
              </div>
            )}

            <ToggleButton
              style={{ border: "none" }}
              className={`navbar-toggler btn-close-off-canvas pr-1 ml-3 mt-5 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={gContext.theme.headerDark ? 1 : 0}
            >
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <div className="d-block d-lg-none">
        <Offcanvas
          show={gContext.visibleOffCanvas}
          onHideOffcanvas={gContext.toggleOffCanvas}
          className="mobile-menu"
        >
          <NestedMenu />
        </Offcanvas>
      </div>
    </>
  );
};
export default Header;
