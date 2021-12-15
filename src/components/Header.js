import { Container, Grid, Box } from "@material-ui/core";
import React, { useState } from "react";
import logo from "../resources/img/Header/logo-pampa.png";
import { makeStyles } from "@material-ui/core/styles";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";

const Header = ({ text, lan }) => {
  const [width, setwidth] = React.useState(window.innerWidth);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [navbar, setNavbar] = useState(false);

  const menuSticky = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", menuSticky);

  return (
    <div className={navbar ? "menu active" : "menu"}>
      <Container style={{ height: "100%" }}>
        <Grid container className="header_line" style={{ height: "100%" }}>
          <Grid item xs={3} style={{ height: "100%" }}>
            <Link
              to="inicio"
              spy={true}
              smooth={true}
              duration={600}
              className="contenedor-logo"
            >
              <img alt="logo" src={logo} className="logo link" />
            </Link>
            {/* <img alt="logo"
                            src={logo} className="logo"/> */}
          </Grid>{" "}
          {width > 959 ? (
            <Grid item xs={9}>
              <Grid
                className="menu-container white"
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <Grid>
                  <Link
                    style={{ cursor: "pointer" }}
                    className="link-menu"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-120}
                  >
                    {text.serv}
                  </Link>
                </Grid>
                <Grid>
                  <Link
                    style={{ cursor: "pointer" }}
                    className="link-menu"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-120}
                  >
                    {text.cont}
                  </Link>
                </Grid>
                <Grid className="meet-btn bg-violet ">
                  {" "}
                  <Link
                    className="link-menu"
                    style={{ padding: "1rem" }}
                    to="meeting"
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-120}
                  >
                    {text.meet}
                  </Link>
                </Grid>
                <Grid className="d-flex">
                  {" "}
                  <img
                    src={text.flag}
                    onClick={lan}
                    style={{ width: "35px" }}
                    alt="flag"
                  />{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Grid>
          ) : (
            <Grid item xs={9}>
              <Grid
                className="menu-container white"
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
                style={{ height: "100%" }}
              >
                <HamburgerMenu
                  isOpen={openMenu}
                  menuClicked={() => setOpenMenu(!openMenu)}
                  width={22}
                  height={17}
                  strokeWidth={2}
                  rotate={0}
                  color="white"
                  borderRadius={0}
                  animationDuration={0.5}
                />
                <Grid
                  style={{ marginLeft: "10px" }}
                  className="d-flex "
                >
                  {" "}
                  <img
                    src={text.flag}
                    onClick={lan}
                    style={{ width: "35px" }}
                    alt="flag"
                  />{" "}
                </Grid>{" "}
                <div
                  className={
                    openMenu
                      ? "menu-mobile open-menu"
                      : "menu-mobile close-menu"
                  }
                >
                  <Grid
                    className="menu-container white"
                    container
                    direction="column"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid>
                      <Link
                        className="link-menu"
                        to="services"
                        spy={true}
                        smooth={true}
                        duration={600}
                        offset={-120}
                      >
                        {text.serv}
                      </Link>
                    </Grid>
                    <Grid>
                      <Link
                        style={{ cursor: "pointer" }}
                        className="link-menu"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={600}
                        offset={-120}
                      >
                        {text.cont}
                      </Link>
                    </Grid>
                    <Grid className="meet-btn bg-violet ">
                      {" "}
                      <Link
                        className="link-menu"
                        style={{ padding: "1rem" }}
                        to="meeting"
                        spy={true}
                        smooth={true}
                        duration={600}
                        offset={-120}
                      >
                        {text.meet}
                      </Link>
                    </Grid>
                  </Grid>{" "}
                </div>{" "}
              </Grid>{" "}
            </Grid>
          )}
        </Grid>{" "}
      </Container>{" "}
    </div>
  );
};

export default Header;
