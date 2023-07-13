"use client";
import React, { useState } from "react";

export default function Home() {
  const [todos, settodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const data = await response.json();
    settodos(data);
  };

  return (
    <div>
      <button onClick={fetchTodos}>Get todos</button>

      <ul>
        {todos.map((todo: any) => {
          return (
            <li
              style={{ color: `${todo.completed ? "green" : "red"}` }}
              key={todo.id}
            >
              {todo.todo}:{todo.completed}.
            </li>
          );
        })}
      </ul>
    </div>
  );
}
