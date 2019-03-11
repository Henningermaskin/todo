import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
import InputForm from "./InputForm";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      list: [],
      pendingItem: ""
    };
    
  }
  
handleItemInput = e => {
  this.setState({
    pendingItem: e.target.value
  })
}
newItemSubmitHandler = e =>{
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
        },
        ...this.state.list
      ],
      pendingItem: ""
    })
  }
  hanldeRemove = index => {
    const newState = this.state.list.filter(item => {
      this.state.list.indexOf(item) !== index
    });
    this.setState({
      list: newState
    });
  };
  render() {
    return (
      <div className="wrapper">
      <InputForm
      className="input"
      type="text"
      handleItemInput={this.handleItemInput}
      newItemSubmitHandler={this.newItemSubmitHandler}
      value={this.state.pendingItem}
      placeholder="Add an item"
      />
      <List list ={this.state.list} />
      
      </div>
    );
  }
}

export default App;
