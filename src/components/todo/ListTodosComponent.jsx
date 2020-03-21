import React, { Component } from 'react';
import TodoService from '../../api/todo/TodoService';
import AuthenticationService from './AuthenticationService';

class ListTodosComponent extends Component{

    constructor(props){
        //console.log('Constructor');
        super(props);
        this.state = {
            todos: [
                /* {id: 1, description: 'Learn React', done:false, targetDate: new Date()},
                {id: 2, description: 'Learn Spring', done:false, targetDate: new Date()},
                {id: 3, description: 'Learn Docker', done:false, targetDate: new Date()} */
                    ],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.refreshTodo = this.refreshTodo.bind(this);
    }

    componentDidMount(){
        //console.log('componentDidMount');
        this.refreshTodo();        
    }

    refreshTodo(){
        let username = AuthenticationService.getLoggedInUserName();

        TodoService.retrieveAllTodos(username)
        .then(
            response => {
                this.setState({todos: response.data})}
        )
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName();

        TodoService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message: `Delete of todo ${id}`});
            this.refreshTodo();
            }
        )
    }

    updateTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName();

        TodoService.updateTodo(username, id)
        .then(
            response => {
                this.setState({message: `Delete of todo ${id}`});
            this.refreshTodo();
            }
        )
    }

    componentWillUnmount(){
        //console.log('componentWillUnmount');
    }

    render(){
        //console.log('render');

        return <div>
                    <h1>List Todos</h1>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>description</th>
                                    <th>Is Completed?</th>
                                    <th>Target Date</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    this.state.todos.map( todo =>
                                                <tr key={todo.id}>
                                                    <td>{todo.id}</td>
                                                    <td>{todo.description}</td>
                                                    <td>{todo.done.toString()}</td>
                                                    <td>{todo.targetDate.toString()}</td>
                                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                                </tr>
                                    )
                                }
                            </tbody>
                            
                        </table>
                    </div>
                </div>
    }
}

export default ListTodosComponent;