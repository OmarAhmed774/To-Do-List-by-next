"use client";
import "./globals.css";
import { useState, useRef } from "react";
export default function Home() {
  const [todo, setTodo] = useState([]);
  let inputRef = useRef();

  let handleAddToFo = () => {
    let text = inputRef.current.value;
    let newItem = { completed: false, text };
    setTodo([...todo, newItem]);
    inputRef.current.value = "";
  };
  let handleItemDone = (index) => {
    let newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    setTodo(newTodo);
  };
  let handleDeleteItem = (index) => {
    let newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="container">
        <ul>
          {todo.map(({ text, completed }, index) => (
            <div key={index} className="item">
              <li
                className={completed ? "done" : ""}
                onClick={() => handleItemDone(index)}
              >
                {text}
              </li>
              <span onClick={() => handleDeleteItem(index)}>❌</span>
            </div>
          ))}
        </ul>
        <input ref={inputRef} placeholder="Enter item..." />
        <button onClick={handleAddToFo}>Add</button>
      </div>
    </div>
  );
}
