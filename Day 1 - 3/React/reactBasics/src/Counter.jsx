import { useState } from "react";
import "../src/Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  let incrementWithInput = (event) => {
    setCount(count + incrementCount);
  };

  let incrementInput = (event) => {
    setIncrementCount(Number(event.target.value));
  };

  return (
    <>
      <nav>
        <img src="./public/Screenshot (93).png" />
        <ul id="navebarList">
          <li>
            <a href="./index.html">Home</a>
          </li>
          <li>
            <a href="./counterIndex.html">Counter</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <header>
        <div className="container">
          <h1>Counter</h1>
          <h2 id="number">{count}</h2>
          <section id="inputSection">
            <input
              type="number"
              id="numberToAdd"
              onChange={incrementInput}
              value={incrementCount}
            />
            <button id="inputButton" onClick={incrementWithInput}>
              Add
            </button>
          </section>
          <section id="addAndSub">
            <button onClick={increment}>ADD</button>
            <button onClick={decrement}>SUB</button>
          </section>
        </div>
      </header>
    </>
  );
}
