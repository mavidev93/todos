import {_http} from '../_http'
import {Todo} from "../../redux/slices/todos/todosSlice";

export const getTodos = async ()=>{
    const res = await  _http.get('/todos')
    return res
}

export  const addTodo = async (todo:Todo)=>{
  const res =  await _http.post('/todos',todo)
    return res
}

export const updateTodo = async (todo:Todo)=>{
    const res = await  _http.put('/todos',todo)
}





