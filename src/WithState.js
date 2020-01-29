import React, { useState } from "react";


const App = () => {
  return <Headline />;
};

const Headline = () => {
  console.log('render')
  const [greeting, setGreeting] = useState("Hello Function Component!");

//   const handleChange = event => setGreeting(event.target.value);

  return (
    <div>
      <h1>{greeting}</h1>
      <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      />
    </div>
  );
};
export default App;
