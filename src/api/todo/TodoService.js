import axios from 'axios';

class TodoService{

    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    deleteTodo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodo(name, id){
        return axios.update(`http://localhost:8080/users/${name}/todos/${id}`);
    }
}


export default new TodoService();