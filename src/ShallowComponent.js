import React from 'react';

export default class ShallowCompareComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      userArray: [1, 2, 3, 4, 5]
    };
    setInterval(() => {

        this.setState(prevState => {
            return prevState.userArray.push(6);
        });
        // Here we are creating the new Array Object during setState using "Spread" Operator
        //   this.setState({
        //     userArray: [...this.state.userArray, 6]
        //   });
    }, 1000);
  }

  render() {
    return <b>Array Length is: {this.state.userArray.length}</b>;
  }
}
