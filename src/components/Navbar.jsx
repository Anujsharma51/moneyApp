import React from "react";
import "../style.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  /* background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px; */
`;
const Navbar = () => {
  return (
    <Nav className="nav">
      <Link to="/product">product</Link>
      <Link to="/cart">cart</Link>
    </Nav>
  );
};

export default Navbar;
