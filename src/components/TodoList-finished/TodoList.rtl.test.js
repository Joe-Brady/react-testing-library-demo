import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

const initialTodos = ["Learn to play guitar", "Buy Nutella"];

describe("TodoList", () => {
  describe("given a new todo is created", () => {
    let wrapper, inputField;

    beforeEach(() => {
      wrapper = render(<TodoList initialTodos={initialTodos} />);
      inputField = wrapper.getByPlaceholderText("Add something new");
      const addButton = wrapper.getByText("Add");

      fireEvent.change(inputField, { target: { value: "Eat Nutella" } });
      fireEvent.click(addButton);
    });

    it("should add the new todo to the initial list", () => {
      const todoItems = wrapper.getAllByLabelText("To-do item");
      expect(todoItems.length).toBe(3);

      const newTodo = wrapper.getByText("Eat Nutella");
      expect(todoItems[2]).toBe(newTodo);
    });

    it("should clear the input", () => {
      expect(inputField.value).toBe("");
    });
  });
});
