import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import styled from "styled-components";

const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const TodoList = (
  { todos, toggleTodo } // get todos from storeState
) => (
  <StyledUl>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </StyledUl>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
