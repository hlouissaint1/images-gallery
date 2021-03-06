import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = { backgroundColor: "lightblue" };

export const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: "12rem", maxHeight: "4rem" }} />
      </Container>
    </Navbar>
  );
};
