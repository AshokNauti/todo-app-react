import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService';

class WelcomeComponent extends Component{

    constructor(props){
        super(props);
        this.retrieveSuccessMessage = this.retrieveSuccessMessage.bind(this);
    }

    render(){
        return (
            <div>
                <div>
                    Welcome {this.props.match.params.name}.
                    You can manage your todo <Link to="/todos">here</Link>
                </div>

                <div className="container">
                    <button className="btn btn-success" 
                    onClick={this.retrieveSuccessMessage}>Hello World</button>
                </div>
            </div>
        )
    }
    
    retrieveSuccessMessage(){
        HelloWorldService.executeHelloWorldService()
        .then(response => console.log(response));
    }
}

export default WelcomeComponent;