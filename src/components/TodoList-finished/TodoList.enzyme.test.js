import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TodoList, {
  TodoInput,
  CurrentTodosList,
  CurrentTodoItem,
} from "./TodoList";

configure({ adapter: new Adapter() });

describe("TodoList", () => {
  const initialTodos = ["Learn to play guitar", "Buy Nutella"];

  describe("(SHALLOW) given a new todo is created", () => {
    let wrapper;

    beforeEach(() => {
      // 1. shallow render with initial todos
      wrapper = shallow(<TodoList initialTodos={initialTodos} />);

      // 2. type "Eat Nutella" into the input field
      wrapper.find(TodoInput).simulate("change", {
        target: { value: "Eat Nutella" },
      });

      // 3. submit the form
      wrapper.find("form").simulate("submit", { preventDefault() {} });

      // ALTERNATIVE: if a class component, update the state directly
      // wrapper.setState({ currentTodosState: ["Learn to play guitar", "Buy Nutella", "Eat Nutella"] });
    });

    it("should update the todos prop, passed to the CurrentTodos component", () => {
      // 1. get the value of the relevant prop on the relevant component
      const currentTodosList = wrapper.find(CurrentTodosList).prop("todos");

      // 2. check that the prop is correct
      expect(currentTodosList).toEqual([
        "Learn to play guitar",
        "Buy Nutella",
        "Eat Nutella",
      ]);
    });
  });

  describe("(MOUNT) given a new todo is created", () => {
    let wrapper;

    beforeEach(() => {
      // 1. full render with initial todos
      wrapper = mount(<TodoList initialTodos={initialTodos} />);

      // 2. type "Eat Nutella" into the input field
      wrapper.find(TodoInput).simulate("change", {
        target: { value: "Eat Nutella" },
      });

      // 3. submit the form
      wrapper.find("form").simulate("submit", { preventDefault() {} });
    });

    it("should update the displayed todos", () => {
      // 1. get all of the todo items
      const currentTodoItems = wrapper.find(CurrentTodoItem);

      // ALTERNATIVE: use classnames or data attributes to get elements
      // const currentTodoItems = wrapper.find(".current-todo-item");
      // const currentTodoItems = wrapper.find("[data-test-id=current-todo-item]");

      // 2. check that there are three of them
      expect(currentTodoItems.length).toBe(3);

      // 3. check that the last item is our new todo
      expect(currentTodoItems.at(2).text()).toBe("Eat Nutella");
    });
  });
});
