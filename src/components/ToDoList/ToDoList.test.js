import { fireEvent, render } from "@testing-library/react";
import { ToDoList } from "./ToDoList";
import { ModifyToDoItem } from "./ModifyToDoItem/ModifyToDoItem";

describe("To do list app", () => {
  test("renders the correct initial DOM", () => {
    const doc = render(<ToDoList />);

    const inputElement = doc.getByLabelText("New Task");
    const appTitle = doc.getByText("To-do List");
    const appDesc = doc.getByText("A paradigm hiring test");

    // The text should show "To-do List"
    expect(appTitle).toHaveTextContent("To-do List");
    expect(appDesc).toHaveTextContent("A paradigm hiring test");

    // The input should be blank.
    expect(inputElement.getAttribute("value")).toBe("");
  });

  test("call add to-do function on child component", () => {
    const handleClick = jest.fn();
    const doc = render(<ModifyToDoItem onSubmit={handleClick} />);

    const inputElement = doc.getByLabelText("New Task");

    fireEvent.change(inputElement, { target: { value: "Test" } });
    fireEvent.keyDown(inputElement, {
      key: "Enter",
    });

    expect(handleClick).toHaveBeenCalled();
  });
});
