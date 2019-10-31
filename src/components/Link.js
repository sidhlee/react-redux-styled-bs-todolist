import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLink = styled.button`
  margin-left: 4px;
  background-color: transparent;
  border: 1px solid #bbb;
  border-radius: 9px;
  font-size: 0.8em;
  cursor: pointer;
  :disabled {
    color: steelblue;
    border-color: steelblue;
    font-weight: bold;
  }
  :active {
    outline: none;
  }
  /* transition: border-color 0.2s, color 0.2s, font-weight 0.2s; */
`;

const Link = ({ active, onClick, children }) => (
  <StyledLink onClick={onClick} disabled={active}>
    {children}
  </StyledLink>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
