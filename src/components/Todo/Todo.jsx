import React, { Component } from "react";

class Todo extends Component {
  render() {
    return <div className="todo">{this.props.todoText}</div>;
  }
}

export default Todo;
