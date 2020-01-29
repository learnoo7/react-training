import React, { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(currentCount => currentCount + 1);


  const handleDecrement = () => setCount(currentCount => currentCount - 1);


  return (
    <div>
      <h1>{count}</h1>
      <Button handleClick={handleIncrement}>Increment</Button>
      <Button handleClick={handleDecrement}>Decrement</Button>
    </div>
  );
};


const Button = ({ handleClick, children }) => (
  <button type="button" onClick={handleClick}>
    {children}
  </button>
);

export default App;
