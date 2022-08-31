import React from "react";
import "../style.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = styled.div`
  /* background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px; */
`;
const Navbar = () => {
  const store = useSelector((store) => store.cart);
  console.log("store:", store);

  return (
    <Nav className="nav">
      <Link to="/product">product</Link>
      <Link to="/cart">cart({store.length})</Link>
    </Nav>
  );
};

export default Navbar;
