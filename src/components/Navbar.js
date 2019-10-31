import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  width: 100%;
  background-color: palevioletred;
  color: white;
  font-size: 1.8em;
  padding: 0.5em 0;
  margin: 0 0 1em 0;
`;
const Navbar = () => <StyledNavbar>Todo App</StyledNavbar>;

export default Navbar;
