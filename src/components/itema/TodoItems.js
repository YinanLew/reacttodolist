import React, {Component} from "react";
import "./TodoItems.css";

class TodoItems extends Component {

    state = {cursorMove: false};

    handleCursor = (move) => {
        return () => {
            this.setState({cursorMove: move})
        };
    };

    handleCheck = (id) => {
        return (event) => {
            this.props.changeCheck(id, event.target.checked);
        };
    };

    handleDelete = (id) => {
        if (window.confirm("Are you sure you want to remove this todo?")) {
            this.props.deleteTodo(id);
        }
    }


    render() {
        const {id, name, done}  = this.props;
        const {cursorMove} = this.state;
        return (
            <div>
                <li style={{backgroundColor: cursorMove ? "#b6b8ba" : "#f4f7fc"}}
                    onMouseEnter={this.handleCursor(true)}
                    onMouseLeave={this.handleCursor(false)}>
                    <label htmlFor={id}>
                        <input type="checkbox" id={id} checked={done}
                               onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={() => this.handleDelete(id)}
                            style={{display:cursorMove ? "block" : "none"}}>Delete</button>
                </li>
            </div>
        );
    };
}

export default TodoItems;