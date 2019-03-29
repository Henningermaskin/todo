import React, { Component } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import todoModel from "./todoModel";
import TodoItem from "./TodoItem";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
      todos: []
    };

    this.onChange = this.onChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }

  onChange(event) {
    this.setState({ textInput: event.target.value });
  }

  submitTodo(event) {
    event.preventDefault();
    this.setState({ todos: [...this.state.todos, this.state.textInput] });
    this.setState({ textInput: "" });
  }
 

  render() {
    var todos = this.state.todos.map(item => <li><TodoItem 
      key = {item.id}
      todo={item}
     
      editing={this.state.editing === item.id}
    /></li>);

    return (
      <div>
        <div class="container">
          <form onSubmit={this.submitTodo}>
            <TextArea onChange={this.onChange} value={this.state.textInput}
             onKeyDown={this.handleNewTodoKeyDown} />
            <Button title="Add Todo" />
          </form>
          <br />
          <ul class="collection">{todos}</ul>
        </div>
      </div>
    );
  }
}

export default Todo;
