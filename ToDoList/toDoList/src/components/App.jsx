import React, { useState } from "react";
import { Checkbox } from "./Checkbox";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, { text: inputText, done: false }];
    });
    setInputText("");  
  }

  function onChangeBox(todoItem) {
    setItems((prevItems) =>
      prevItems.map((el) =>
        el === todoItem ? { ...el, done: !el.done } : el
      )
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <li key={index} style={{ textDecoration: todoItem.done ? "line-through" : null }}>
              <Checkbox
                onClick={() => onChangeBox(todoItem)}
                defaultChecked={todoItem.done}
              />{" "}
              {todoItem.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
