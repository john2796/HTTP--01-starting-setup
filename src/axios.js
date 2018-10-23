import axios from 'axios';

// Creating and Using Axios Instances
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
instance.defaults.headers.common['Authorizatoin'] = 'AUTH TOKEN FROM INSTANCES';

export default instance;
