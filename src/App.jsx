import { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;

    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (index) => {
    const newList = items.filter((_, i) => i !== index);
    setItems(newList);
  };

  return (
    <div className="container">
      <h1>Grocery List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter grocery item..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addItem}>+</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;