import React, {Component} from "react";
import "./TodoFooter.css";
import PropTypes from "prop-types";

class TodoFooter extends Component{

    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodos: PropTypes.func.isRequired,
        deleteAllCompleted: PropTypes.func.isRequired
    }

    handleCheckAll = (event) => {
            this.props.checkAllTodos(event.target.checked);
        }


    deleteAllCompleted = () => {
        this.props.deleteAllCompleted()
    }

    render() {
        const {todos} = this.props;
        const totalTodos = todos.length;
        const completedTodos = todos.reduce((pre, todo) => {
            return pre + (todo.done ? 1 : 0);
        },0)

        return (
            <div className={"todoFooter"}>
                <label htmlFor={"finished"}>
                    <input type={"checkbox"} id={"finished"}
                           onChange={this.handleCheckAll}
                           checked={completedTodos === totalTodos && totalTodos !== 0}/>
                    <span>Finished {completedTodos}/{totalTodos}</span>
                </label>
                <button onClick={this.deleteAllCompleted}
                        className={"button btnStyle"}>Delete Completed</button>
            </div>
        );
    }
}

export default TodoFooter;