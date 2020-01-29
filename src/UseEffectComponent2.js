import React, { useState, useEffect } from "react";

const ChildComponent = () => {
  useEffect(() => {
    console.log("effect in child");
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return <h2>Child Component</h2>;
};

function App() {
  const [shouldRender, setShouldRender] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShouldRender(prev => !prev)}>
        Show/Hide
      </button>
      {shouldRender ? <ChildComponent /> : null}
    </>
  );
}

export default App;
