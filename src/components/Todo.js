import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/* "props" here is NOT the props being injected to the rendering functional component ("Todo")
 but it's the props being injected to THIS Component(StyledTodo) */
const StyledTodo = styled.li`
  /* $ in font of {} takes callback function that can return css rules wrapped in back ticks*/
  ${props =>
    props.completed ? `text-decoration: line-through; color: #888` : null}
  list-style-type: none;
  margin: 10px auto;
  cursor: pointer;
`;

const Todo = ({ onClick, completed, text }) => (
  <StyledTodo
    onClick={onClick}
    completed={completed} // you MUST pass the piece of props needed in StyledComponents
    // style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </StyledTodo>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
export default Todo;
