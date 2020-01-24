import React from 'react';
export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  
    setInterval(() => {
      this.setState((prevState) => ({
        counter: 0
      }));
    }, 1000);
  }
  
  render() {    
    console.log('render');
    return <b>Counter Value: {this.state.counter}</b>
  }
}
