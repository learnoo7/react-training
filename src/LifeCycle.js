import React from 'react'; 
  
export default class LifeCycle extends React.Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { show: false }; 
    } 
  
    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 
  
    changeState() 
    { 
        this.setState({ y : !this.state.show }); 
    } 
  
    render() 
    {   console.log('render()', this.state)
        return ( 
            <div> 
            <h1>Hello </h1> 
            <h2> 
                <a onClick={this.changeState.bind(this)}>Press Here!</a> 
            </h2> 
            {/* {this.state.show && <ChildLifeCycle/>} */}
            </div>); 
    } 
  
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
}


class ChildLifeCycle extends React.Component { 
    componentWillUnmount(){
        console.log('Child component function componentWillUnmount()');
    }

    render(){
        return(<h2>Child Component</h2>)
    }
}