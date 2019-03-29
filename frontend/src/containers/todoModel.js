import react from "react";
import utils from "./utils";
import todo from "./Todo";





function TodoModel(key){
    this.key = key;
    this.todos = utils.store(key);
    this.onChange = [];
}

function subscribe(onChange){
    this.onchanges.push(onChange);

}
function inform(){
    utils.store(this.key, this.todos);
    this.onchanges.forEach(function fe(cb){cb();});

}
function addTodo(title){
    this.todos = this.todos.concat({
        id: utils.uuid(),
        title:title,
        completed: false
    });

    this.inform();
}

function toggle(todotoggle){
    this.todos = this.todos.map(function (todo) {
        return todo !== todotoggle ?
            todo :
            utils.extend({}, todo, {completed: !todo.completed});
});
this.inform();
};
function save(todosave, text){
    this.todos = this.todos.map(function (todo) {
        return todo !== todosave ? todo : utils.extend({}, todo, {title: text});
    });

    this.inform();
}
function clearcompleted(){
    this.todos = this.todos.filter(function (todo) {
        return !todo.completed;
    });

    this.inform();
}

export default TodoModel;