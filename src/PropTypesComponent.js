import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const greeting = "Hello";
  return <Headline  />;
};

const Headline = ({ value }) => {
  return <h1>{value}</h1>;
};

Headline.propTypes = {
  value: PropTypes.string.isRequired
};

Headline.defaultProps = {
  value: "Hello Component"
};
export default App;
