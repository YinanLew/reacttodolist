import React, {Component} from "react";
import PropTypes from 'prop-types';
import uuid from "react-uuid";
import "./TodoHeader.css";


class TodoHeader extends Component{

    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleInput = (event) => {
        const {target, keyCode} = event;
        if (keyCode !== 13) return;
        if (target.value.trim() === ''){
            alert("Todo must be filled out")
            return;
        }
        const inputTodo = {id: uuid(), name: target.value, done: false}
        this.props.addTodo(inputTodo);
        target.value = '';
    }

    render() {
        return (
            <div className={"todoHeader"}>
                <h1>Todo List</h1>
                <input onKeyUp={this.handleInput} type={"text"}
                       maxLength={38} placeholder={"Press enter to add new todo"}/>
            </div>
        );
    }
}

export default TodoHeader;