import React from "react";

//css
import "./TodoInput.css";

class TodoInput extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: "",
    };
  }

  getTodoText = (event) => {
    this.setState({ todoText: event.target.value });
  };
  addTodo = () => {
    this.props.getTodoText(this.state.todoText);
    this.setState({ todoText: "" });
  };
  render() {
    return (
      <div className="todo-input-wrapper">
        <div className="todo-input">
          <input
            value={this.state.todoText}
            type="text"
            onChange={this.getTodoText}
          />
        </div>
        <div className="todo-add-button">
          <button onClick={this.addTodo}>Add todo</button>
        </div>
      </div>
    );
  }
}
export default TodoInput;
