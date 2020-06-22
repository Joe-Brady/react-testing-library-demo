import React from "react";
import styled from "styled-components";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

const Container = styled("div")`
  margin: 20px;
  width: 400px;
`;

function App() {
  return (
    <Container>
      <TodoList initialTodos={["Learn to play guitar", "Buy Nutella"]} />
    </Container>
  );
}

export default App;
