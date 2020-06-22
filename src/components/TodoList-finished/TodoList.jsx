import React, { useState } from "react";
import { TodoInput, CurrentTodosList, AddTodoButton } from "./TodoAtoms";

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
        />
        <AddTodoButton disabled={newTodo === ""} type="submit">
          Add
        </AddTodoButton>
      </form>
    </div>
  );
};

export default TodoList;
