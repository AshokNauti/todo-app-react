import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

class CounterButton extends Component{

    //Define the initial state in a constructor
    //State => counter 0
    constructor(){
        super(); //Error in calling the constructor if the super method inside the constructor
        this.state = {
            counter : 0
        }

        //binding the increment method to use the state inside that below. 
        //NOTE: It's not needed if you call the aerrow function () => when defining it e.g. line number 27 and 28 button declaration.
        //this.increment = this.increment.bind(this);
        //this.decrement = this.decrement.bind(this);
    }

    render(){
        return (
            <div className="Counter">
                {/*<button onClick={this.increment}>+1</button>*/}
                {/* <button onClick={this.increment}>+{this.props.by}</button> 
                    <button onClick={this.decrement}>-{this.props.by}</button>*/}
                <button onClick={() => {this.props.incrementMethod(this.props.by);}}>+{this.props.by}</button>
                <button onClick={() => {this.props.decrementMethod(this.props.by);}}>-{this.props.by}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        );
    }

    //NOTE: this can be called unsing aerrow method as follows and then method binding is not needed. 
    //inctrement() = () =>{} after button declaration as aerrow function in line no 27 and 28, below functions are not needed unless we need local counter value
    increment(){
        //Update state => counter++
        //this.state.counter++; //Can't call it directly like this, we first need to 
        // bind the method and also call the SetState method
        this.setState({
            //counter: this.state.counter + 1
            counter: this.state.counter + this.props.by
        });
        
        this.props.incrementMethod(this.props.by);
    }

    decrement(){
        //Update state => counter++
        //this.state.counter++; //Can't call it directly like this, we first need to 
        // bind the method and also call the SetState method
        this.setState({
            //counter: this.state.counter + 1
            counter: this.state.counter - this.props.by
        });
        
        this.props.decrementMethod(this.props.by);
    }
    
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default CounterButton;