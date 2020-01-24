import React, { Component, PureComponent } from "react";

export default class SetState extends Component {
  // Initialize items to an empty array
  state = {
    items: []
  };

  // Initialize a counter that will increment
  // for each item ID
  nextItemId = 0;

  makeItem() {
    // Create a new ID and use
    // a random number as the value
    return {
      id: this.nextItemId++,
      value: Math.random()
    };
  }

  // The Right Way:
  // copy the existing items and add a new one
  addItemImmutably = () => {
    this.setState(prevState => ({
      items: [...prevState.items, this.makeItem()]
    }));
  };

  // The Wrong Way:
  // mutate items and set it back
  addItemMutably = () => {
      this.state.items.push(this.makeItem());
      this.setState({ items: this.state.items });
    // this.setState(prevState => {
    //   console.log("prev", prevState);
    //   return prevState.items.push(this.makeItem());
    // });
  };

  render() {
    return (
      <div>
        <button onClick={this.addItemImmutably}>
          Add item immutably (good)
        </button>
        <button onClick={this.addItemMutably}>Add item mutably (bad)</button>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

class ItemList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("component render", this.props);
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    );
  }
}
