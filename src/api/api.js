import axios from 'axios'
export const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

export const apiKey = '62a13439211973f22153709b86239587'