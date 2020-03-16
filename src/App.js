import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import FirstComponent from './components/learning-component/FirstComponent';
//import SecondComponent from './components/learning-component/SecondComponent';
import LoginComponent from './components/todo/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        <LoginComponent></LoginComponent>
      </div>
    );
  }
}
export default App;