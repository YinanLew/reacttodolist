import React from "react";
import "./App.css";
import TodoHeader from "./components/header/TodoHeader";
import TodoList from "./components/form/TodoList";
import TodoFooter from "./components/footer/TodoFooter";
import uuid from "react-uuid";

class App extends React.Component {

    state = {todos:[
            {id: uuid(), name: "Learn React", done: true},
            {id: uuid(), name: "Learn JavaScript", done: true},
            {id: uuid(), name: "Learn CSS", done: true},
            {id: uuid(), name: "Find a job", done: false}
        ]};

    addTodo = (inputTodo) => {
        const {todos} = this.state;
        const newTodos = [inputTodo, ...todos];
        this.setState({todos: newTodos});
    }

    changeCheck = (id, done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todo) => {
            if (todo.id === id) return {...todo, done: done};
            else return todo;
        });
        this.setState({todos: newTodos});
    }

    deleteTodo = (id) => {
        const {todos} =this.state;
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({todos: newTodos});
    }

    checkAllTodos = (done) => {
        const {todos} =this.state;
        const newTodos = todos.map((todo) => {
            return {...todo, done: done};
        });
        this.setState({todos: newTodos});
    }

    deleteAllCompleted = () => {
        const {todos} =this.state;
        const newTodos = todos.filter((todo) => {
            return !todo.done
        });
        this.setState({todos: newTodos});
    }

  render() {
      const {todos} =this.state;
    return (
        <div>
            <div className={"listContainer"}>
                <div className={"todoWrap"}>
                    <TodoHeader addTodo={this.addTodo} />
                    <TodoList todos={todos} changeCheck={this.changeCheck}
                              deleteTodo={this.deleteTodo}/>
                    <TodoFooter todos={todos}
                                checkAllTodos={this.checkAllTodos}
                                deleteAllCompleted={this.deleteAllCompleted}/>
                </div>
            </div>
        </div>
    );
  };
}

export default App;
