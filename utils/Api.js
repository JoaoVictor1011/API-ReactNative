import axios from 'axios';

const api = axios.create({
    baseURL: 'https://630e4d4937925634187b22f1.mockapi.io/',
})

export default api;