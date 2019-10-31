import React from "react";
import SelectFilter from "./SelectFilter";
import AddTodo from "../containers/AddTodo";
import Navbar from "./Navbar";
import VisibleTodoList from "../containers/VisibleTodoList";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <AddTodo />
        <SelectFilter />
        <VisibleTodoList />
      </Container>
    </div>
  );
}

export default App;
