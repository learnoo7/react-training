// MyComponent.js
import React, { Component } from "react";

class MyOtherComponent extends Component {
  render() {
    return (
      <>
        <h2>This is my {this.props.name} component.</h2>
      </>
    );
  }
}

class MyComponent extends Component {
  render() {
    return (
      <>
        <h1>This is my component.</h1>
        <MyOtherComponent name='other'/>
      </>
    );
  }
}

export default MyComponent;
