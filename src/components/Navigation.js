/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/img/MyFancy logos/logo_transparent.png"
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";

function Navigation(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  if(!props.isSignedIn)
    return (
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        color-on-scroll="300"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/index"
              target="_blank"
              title="Coded by Creative Tim"
              tag={Link}
            >
              <img alt="" src={ logo }/>
              MyFancyRetailer
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/products" tag={Link}>
                  <i className="nc-icon nc-box-2" /> Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={'/signin'} tag={Link}>
                  <i className="nc-icon nc-single-02" /> Sign In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={'/register-page'} tag={Link}>
                  <i className="nc-icon nc-single-02" /> Register
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  else
    return (
        <Navbar
            className={classnames("fixed-top", navbarColor)}
            color-on-scroll="300"
            expand="lg"
        >
          <Container>
            <div className="navbar-translate">
              <NavbarBrand
                  data-placement="bottom"
                  to="/index"
                  target="_blank"
                  title="Coded by Creative Tim"
                  tag={Link}
              >
                <img alt="" src={ logo }/>
                MyFancyRetailer
              </NavbarBrand>
              <button
                  aria-expanded={navbarCollapse}
                  className={classnames("navbar-toggler navbar-toggler", {
                    toggled: navbarCollapse
                  })}
                  onClick={toggleNavbarCollapse}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <Collapse
                className="justify-content-end"
                navbar
                isOpen={navbarCollapse}
            >
              <Nav navbar>
                <NavItem>
                  <NavLink to="/products" tag={Link}>
                    <i className="nc-icon nc-box-2" /> Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={'/signin'} tag={Link}>
                    <i className="nc-icon nc-single-02" /> Sign Out
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
    );
}

export default Navigation;
