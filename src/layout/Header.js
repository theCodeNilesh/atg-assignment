import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

// import { UserContext } from "../context/UserContext";

import logo from "../img/logo.svg";
import downarrow from "../img/downarrow.svg";

const Header = () => {
  //   const context = useContext(UserContext); // values in usercontext stored in context var

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="justify-content-between" light expand="md">
      <NavbarBrand>
        <img src={logo} alt="logo" className="logo" />
      </NavbarBrand>
      <div class="d-flex">
        <form class="d-flex form-inline mr-auto ml-auto">
          <input
            class="form-control  search icon"
            placeholder="Search for your favorite group in ATG"
            type="text"
          />
        </form>
      </div>
      <div className="navtxt">
        Create account. <span className="bluetxt">It's free!</span>
        <img src={downarrow} alt="downarrow" style={{ marginLeft: "0.7rem" }} />
      </div>
    </Navbar>
  );
};

export default Header;
