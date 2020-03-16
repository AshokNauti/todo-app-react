import React, { Component } from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

class Counter extends Component{

    //NOTE: Copied this from CounterButton class to have the global state of counter across all the button
    constructor(){
        super(); //Error in calling the constructor if the super method inside the constructor
        this.state = {
            counter : 0
        }

        //binding the increment method to use the state inside that below. 
        //NOTE: It's not needed if you call the aerrow function => when defining it.
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render(){
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }

    reset(){
        this.setState(
            () => {
                return {counter: 0}
            }
        );
    }

    //NOTE: This increment method is also being moved from CounterButton class to operate on global state of counter
    increment(by){

        //Update state => counter++
        //this.state.counter++; //Can't call it directly like this, we first need to 
        // bind the method and also call the SetState method
        {/*this.setState({
            //counter: this.state.counter + 1
            counter: this.state.counter + by
        });*/}
        
        //Replacing above method using aerrow function => and also previous State prevState property
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );
    }

    decrement(by){

        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        );
    }
}

/*function increment(){
    console.log('Hello click');
}*/


export default Counter;