
import { useState } from "react";
import "./App.css"; 
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1 class="title">You clicked <span class="number">{count}</span> times</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;