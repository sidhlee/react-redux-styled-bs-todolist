import React from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import { addTodo } from "../actions";

// if this doesn't override bootstrap css,
// try deleting bootstrap from dependencies
const StyledButton = styled(Button)`
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-bottom: 1.5em;
  :hover {
    background-color: papayawhip;
    color: #555;
    border-color: white;
  }
  :active {
    background-color: transparent !important;
    color: #555 !important;
  }
`;

const StyledTextInput = styled(Form.Control)`
  /* 
  Overwrite BS's default onFocus styling (blue outline + box-shadow) 
  to match button style (outline-secondary) 
  
  For solutions that modifies BS' sass variable,
  https://stackoverflow.com/questions/14820952/change-bootstrap-input-focus-blue-glow
  */

  :focus {
    /* got these values from inspecting button with :focus state */
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    outline: none;
    border: none;
  }
`;

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <Form.Group>
          <StyledTextInput
            type="text"
            placeholder="Enter Todo"
            ref={node => (input = node)}
          />
        </Form.Group>
        <StyledButton type="submit" block variant="outline-secondary">
          Add Todo
        </StyledButton>
      </Form>
    </div>
  );
};

// function returned from connect() injects dispatch to the passed Component
export default connect()(AddTodo); // only dispatching actions to the store
