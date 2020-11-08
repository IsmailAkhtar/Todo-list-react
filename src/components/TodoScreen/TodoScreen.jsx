import React from "react";
import Todo from "../Todo/Todo";

//components
import TodoInput from "./../TodoInput/TodoInput";

class TodoScreen extends React.Component {
  state = {
    todoList: [],
  };
  getTodoText = (text) => {
    let arr = [...this.state.todoList];
    arr.unshift(text);
    this.setState({ todoList: arr });
  };
  render() {
    return (
      <div>
        <TodoInput getTodoText={this.getTodoText} />
        <div>
          {this.state.todoList.map((value) => {
            return <Todo todoText={value} />;
          })}
        </div>
      </div>
    );
  }
}
export default TodoScreen;
