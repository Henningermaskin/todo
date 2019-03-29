import React, {Component} from "react";
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TextArea from "../components/TextArea"
import Button from "../components/Button"


class AddTodo extends Component{
constructor(props){
    super(props);

    this.state={
       
    }
}
 
render(){
    
  return (
    <div>
      <div class="container">
          <form onSubmit={this.submitTodo}>
            <TextArea onChange={this.onChange} value={this.state.textInput}
             onKeyDown={this.handleNewTodoKeyDown} />
            <Button title="Add Todo" />
          </form>
          </div>
    </div>
  )
    }
}
export default AddTodo;