/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class Navbars extends React.Component {
  render() {
    return (
      <>
        <section>
          <Container className="pb-6">
            {/* Navigation */}
            <h2 className="text-center text_black">
            CarteTheBlanche
            </h2>
            <h3 className=" text_black">
            In French, "carte" translates to "document," and "blanche" means blank. Together, "carte blanche" refers to a blank canvas, symbolizing the beginning of a new journey. Just like starting a new adventure, you commence with a blank page, providing you with the opportunity to craft your unique path forward.

            </h3>
          </Container>
          {/* Navbar default */}
          <Navbar className="navbar-dark bg-dark pt-" expand="lg">
            <Container>
              <NavbarBrand  href="#pablo" onClick={(e) => e.preventDefault()}>
              © 2024 CarteTheBlanche
              </NavbarBrand>
             
              <UncontrolledCollapse navbar toggler="#navbar-default">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar-default">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                     <i className="fa fa-youtube-play"></i>
                      <span className="nav-link-inner--text d-lg-none">
                        Discover
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                     <i className="fa fa-instagram"></i>
                      <span className="nav-link-inner--text d-lg-none">
                        Profile
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                     <i className="fa fa-instagram"></i>
                      <span className="nav-link-inner--text d-lg-none">
                        Profile
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
         
        </section>
      </>
    );
  }
}

export default Navbars;
