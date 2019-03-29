import React, {Component} from "react";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import classNames from "classnames"
class TodoItem extends Component {
    constructor(props){
        super(props);

        this.state ={
            editText: "",
            completed: "",
            editing: ""

        }
    }


handleEdit() {
    this.props.onEdit();
    this.setState({editText: this.props.todo.title});
}

handleChange(e) {
if(this.props.editing){
    this.setState({editText: e.target.value});
}
}
handleKeyDown(event){
    if (event.which === 27){
        this.setState({editText: this.props.todo.title});
        this.UNSAFE_componentWillMount.props.onCancel(event);
    } else if(event.which === 13){
        this.handleSubmit(event);
    }
}

handleSubmit(e){
    var val = this.state.editText.trim();
    if (val) {
        this.props.onSave(val);
        this.setState({editText: val});

    } else {
        this.props.onDestroy();
    }

}

render() {
    return(
    <li className={classNames({
        completed: this.props.todo.completed,
        editing: this.props.editing
    })}>
    <div className="view">
    <CheckBox checked ={this.props.todo.completed} onChange={this.props.onToggle}/>
    <label onDoubleClick ={this.handleEdit}>
    {this.props.todo.title}
    </label>
    <Button className="destroy" onClick={this.props.onDestroy}/>
    </div>
    <TextArea onChange={this.handleChange} value={this.state.editText} onKeyDown={this.handleKeyDown} onBlur={this.handleSubmit}
    /></li>
    );
}
}
export default TodoItem;