import React, { useState } from "react";
import styled from "styled-components";

const TodoList = ({ initialTodos = [] }) => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const addNewTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div>
      <CurrentTodosList todos={todos} />
      <form onSubmit={addNewTodo}>
        <TodoInput
          name="new_todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add something new"
          autoComplete="off"
        />
        <AddTodoButton type="submit">Add</AddTodoButton>
      </form>
    </div>
  );
};

export const CurrentTodosList = ({ todos }) => (
  <div>
    {todos.map((todo) => (
      <CurrentTodoItem key={todo}>{todo}</CurrentTodoItem>
    ))}
  </div>
);

export const CurrentTodoItem = styled("div")`
  background-color: #002f01;
  border-radius: 100px;
  margin: 10px 0;
  padding: 15px 20px;
  color: white;
`;

export const TodoInput = styled("input")`
  border-radius: 100px;
  padding: 15px 20px;
  border: 2px solid gainsboro;
`;

export const AddTodoButton = styled("button")`
  background-color: #006300;
  padding: 15px 20px;
  border: none;
  border-radius: 100px;
  width: 100px;
  margin-left: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:disabled {
    background-color: grey;
  }
`;

export default TodoList;
