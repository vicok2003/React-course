import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Take out the trash", completed: false },
    { id: 2, task: "Buy groceries", completed: false },
    { id: 3, task: "Do laundry", completed: false },
  ]);

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleChange(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

 