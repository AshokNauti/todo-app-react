import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            userName: 'ashok',
            password: 'password',
            showSuccessMessage: false,
            hasLoginFailed: false
        }

        //this.handleUserNameChange = this.handleUserNameChange.bind(this);
        //this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    //NOTE: Below approach of handling events works perfectly b ut if there are various control on the page we will end up writing many functions like these.
    //So instead of using the value we can use name property of target to make it dynamic
    /* handleUserNameChange(event){
        //console.log(event.target.value);
        //this.setState({userName: event.target.value});

        //Dynamically using the name property of target but DO NOT forget to use [event.target.name] to use the run-time value instead of a constant type value userName
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value});
    }

    handlePasswordChange(event){
        console.log(event.target.value);
        this.setState({password: event.target.value});
    } */

    handleChange(event){
        //console.log(event.target.value);
        //this.setState({userName: event.target.value});

        //Dynamically using the name property of target but DO NOT forget to use [event.target.name] to use the run-time value instead of a constant type value userName
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value});
    }

    login(){
        if(this.state.userName==='ashok' && this.state.password==='password'){
            AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.password);
            this.props.history.push(`/welcome/${this.state.userName}`);
            //console.log('Successful');
            //this.setState({showSuccessMessage:true});
            //this.setState({hasLoginFailed:false});
        }else{
            console.log('Failed');
            this.setState({showSuccessMessage:false});
            this.setState({hasLoginFailed:true});
        }
    }

    logout(){
        AuthenticationService.logout(this.state.userName);
    }

    render(){
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*NOTE:Conditional div can be shown/hidden by a function, e.g. ShowInvalidCredentials(props) below */}
                    {/* <div>Invalid Credentials</div> */}
                    {/* <div>Login Successful</div> */}
                    
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentials>
                    <ShowLoginSuccessfulMessage showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccessfulMessage> */}

                    {/* NOW since with a boolean condition Javascript allows you to output desired element based on boolean value, 
                        below is another nicer way to take advantage of it by commenting above code and use below one */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}  
                    {/*this.state.showSuccessMessage && <div>Login Successful</div>*/}
                    
                    User Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn" onClick={this.login}>Login</button>
                </div> 
            </div>
        )
    }
}

/* function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>;
    }

    return null;
}

function ShowLoginSuccessfulMessage(props){
    if(props.showSuccessMessage){
        return <div>Login Successful</div>;
    }

    return null;
} */

export default LoginComponent;