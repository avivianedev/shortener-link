import axios from 'axios';
import.meta.env.MODE


export const key = import.meta.env.VITE_SOME_KEY

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: { Authorization: `Bearer ${key}` }

})

export default api

