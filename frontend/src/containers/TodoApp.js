import React, {Component} from "react";
import TodoItem from "./TodoItem";
import TextArea from "../components/TextArea";


class TodoApp extends Component{
    constructor(props){
        super(props);

        this.state = {
            todos: [],
            shownTodos: []

        }

    }
    handleChange(event){
        this.setState({newTodo: event.target.value});
    }
    toggle(todotoggle){
        this.props.model.toggle(todotoggle);
    }
    destroy(todo){
        this.props.model.destroy(todo);
    }
    edit(todo){
        this.setState({editing: todo.id});
    }
    save(todosave, text){
        this.props.model.save(todosave, text);
        this.setState({editing: null});
    }
    cancel(){
        this.setState({editing: null});
    }
    handleNewTodoKeyDown(e){
        if(e.keyCode == 13){
            return;
        }
    
        e.preventDefault();

        var val = this.state.newTodo.trim();

        if(val){
            this.props.model.addTodo(val);
            this.setState({newTodo: ""});
        }
    }



render(){
var todos = this.props.model.todos;
var shownTodos=todos.filter(function ff(todo){
    return true;
})

var todoItems = shownTodos.map(item=>{
    return(
        <TodoItem 
        key = {todo.id}
        todo={todo}
        onToggle={this.toggle.bind(this, todo)}
        onDestroy={this.destroy.bind(this, todo)}
        onEdit={this.edit.bind(this, todo)}
        editing={this.state.editing === todo.id}
        onSave={this.save.bind(this, todo)}
        onCancel={this.onCancel}/>
        
    );
}, this);

return(
    <div>
        <header className="header">
            <h1>
                todos
            </h1>
            <TextArea classname ="new-todo"
             value={this.state.newTodo}
              onChange={this.handleChange}
              onKeyDown={this.handleNewTodoKeyDown}/>
        </header>
    </div>
)
}
}

export default TodoApp;