import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../../assets/react.svg";

const Header = () => {
  return (
    <>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/" className="d-flex gap-2 align-items-center">
          <img
            alt="logo"
            src={Logo}
            style={{
              height: 40,
              width: 40,
            }}
          />
          Employes App
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default Header;
