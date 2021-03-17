import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://thirsty-wozniak-9fa4ce.netlify.app/api'
})