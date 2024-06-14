import {_http} from '../_http'


export const getTodos = async ()=>{
    const res = await  _http.get('/todos')
    return res
}


