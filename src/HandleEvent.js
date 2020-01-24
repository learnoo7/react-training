import React, { Component } from "react";
const initialList = ["Learn React", "Learn Firebase", "Learn GraphQL"];
class ListWithAddItem extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      list: initialList
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value) {
      this.setState((previous) => ({ list: previous.list.concat(previous.value) }));
    }
    this.setState({ value: "" });
  };

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}
export default ListWithAddItem;
