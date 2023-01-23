import React from "react";
import { Button } from "react-bootstrap";

function Todo({ todo, index, markTodo, removeTodo, editTodo }) {
    return (
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => editTodo(index)}>Edit</Button>{' '}
          <Button variant="outline-success" onClick={() => markTodo(index)}>Completed</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>Delete</Button>
        </div>
      </div>
    );
  }

  export default Todo;