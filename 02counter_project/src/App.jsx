import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const maxLimit = 5;

  const increaseCount = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="app">
      <h1>Counter: <span>{count}</span></h1>
      <div className="button-container">
        <button className="counter" onClick={increaseCount}>Increase</button>
        <button className="counter" onClick={decreaseCount}>Decrease</button>
      </div>
      {count === maxLimit && <h1>{count} is the maximum you can Increase</h1>}
      {count ==0 && <h1>{count} is the minimum you can decrease</h1>}
    </div>
  );
}

export default App;
