import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-course-be0af.firebaseio.com/'
});

export default instance;