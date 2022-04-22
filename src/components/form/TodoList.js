import React, {Component} from "react";
import PropTypes from "prop-types";
import TodoItems from "../itema/TodoItems";
import "./TodoList.css";

class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeCheck: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, changeCheck, deleteTodo} = this.props;
        return (
            <div>
                <ul className={"todoList"}>
                    {
                        todos.map((todo) => {
                            return <TodoItems key={todo.id} {...todo} changeCheck={changeCheck}
                                              deleteTodo={deleteTodo}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;