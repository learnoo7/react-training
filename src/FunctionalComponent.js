import React from 'react';

const App = () => {
  const greeting = 'Hello Function Component!';
  return <Headline value={greeting} />;
};

const Headline = ({ value }) => {
  return <h1>{value}</h1>;
};


export default App;