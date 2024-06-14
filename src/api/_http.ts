import axios from 'axios'


//NOTICE: should be in .env in production code
const BASE_URL = "http://localhost:4000"

//NOTICE: This is an overkill for this project but for the sake of structure added, in complex project we can create
// multiple axios instances and handle interceptor logic like Bearer token

export const _http = axios.create({
    baseURL: BASE_URL,
});


