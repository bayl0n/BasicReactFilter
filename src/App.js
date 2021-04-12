import React, { useState } from 'react';
import './App.css';
import Name from './components/Name';

function App() {
  const state = [
      {name: "Nathan", category: "Human"},
      {name: "1", category: "Narwal"},
      {name: "2", category: "Human"},
      {name: "3", category: "Banana"},
      {name: "John", category: "Narwal"},
      {name: "Gary", category: "Banana"},
      {name: "Steve", category: "Banana"},
      {name: "Mike", category: "Narwal"},
      {name: "Chris", category: "Human"},
    ];

  // Set up hooks for items state
  const [items, setItems] = useState(state);
  const [option, setOption] = useState("Human");

  // Filter out Humans category
  const handleFilter = () => {
    setItems(state.filter(user => user.category === option));
  }
  
  const handleClearFilter = () => {
    setItems(state);
  }
  
  const handleChange = (event) => {
    setOption(event.target.value);
    setItems(state.filter(user => user.category === event.target.value));
  }

  return (
    <div className="App">
      <h1>Basic Filter</h1>
      <select value={option.value} onChange={handleChange}>
        <option>Human</option>
        <option>Narwal</option>
        <option>Banana</option>
      </select>
      <br/>
      <button onClick={handleFilter}>
        Filter
      </button>
      <button onClick={handleClearFilter}>
        Clear Filter
      </button>
      { items.map(user => <Name name={user.name} category={user.category}/>) }
    </div>
  );
}

export default App;
