import axios from 'axios';

class HelloWorldService {
    executeHelloWorldService(){
        //console.log('Hello world service executed');
        return axios.get('http://localhost:8080/hello-world');
    }
}

export default new HelloWorldService();