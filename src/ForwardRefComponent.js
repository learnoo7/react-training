import React, { useState, useEffect, useRef, forwardRef } from "react";
const App = () => {
  const [greeting, setGreeting] = useState("Hello React!");

  const handleChange = event => setGreeting(event.target.value);

  const ref = useRef();

  useEffect(() => ref.current.focus(), []);

  return (
    <div>
      <h1>{greeting}</h1>
      <Input value={greeting} handleChange={handleChange} ref={ref} />
    </div>
  );
};
const Input = forwardRef(({ value, handleChange }, ref) => {
  return <input type="text" value={value} onChange={handleChange} ref={ref} />;
});
export default App;
