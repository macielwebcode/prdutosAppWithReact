// base url: https://fakestoreapi.com
//url da api: /products

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

export default api;