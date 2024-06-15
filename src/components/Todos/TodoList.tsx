import {useAppDispatch, useAppSelector} from "../../redux/app/hooks";
import React from "react";
import {getTodosThunk, Todo} from "../../redux/slices/todos/todosSlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {updateTodo,deleteTodo} from "../../api/todosApi";
import TodoForm from "./TodoForm";
import {LoadingSpinner} from "../../lib";

function TodoList() {
    const {todosList, status, error} = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        //Initially get todos when status is idle
        if (status === 'idle') {
            dispatch(getTodosThunk())
        }
    }, [])


    if(status==='failed'){
        return <div className={'text-red-600'}>{error}</div>
    }
    if(status==='loading'){
     return   <LoadingSpinner/>
    }

    return <div className={'mt-8 shadow-md p-3'}>
        <h3 className={'text-lg '}> لیست تسک ها</h3>
        {todosList.length >0?   <ul className={'flex flex-col gap-5 mt-4'}>
            {todosList?.map((todo) =><SingleTodo todo={todo}/>  )}
        </ul>:<p>لیست تسک ها خالی است.</p>}

    </div>
}


//SingleTodo component
type SingleTodoProp={todo:Todo}
function SingleTodo({todo}:SingleTodoProp){
    const  {isCompleted,title,description,id}= todo
    const [showEdit,setShowEdit] = React.useState(false)
    const dispatch = useAppDispatch()
    const toggleForm = ()=>setShowEdit(!showEdit)
    //Handlers
    const handleCheckChange = async (e:React.ChangeEvent<HTMLInputElement>)=>{
       await updateTodo({...todo,isCompleted:e.target.checked})
        dispatch(getTodosThunk())
    }

    const handleDelete= async ()=>{
        try {
           await deleteTodo(id)
            //refetch todos
            dispatch(getTodosThunk())
        }
        catch (e){
            console.log(e)
        }
    }
    const submitFunc = async (todo:Todo)=>{

        try {
            await updateTodo(todo)
            dispatch(getTodosThunk())
            toggleForm()
        }catch (e){
            console.log(e)
        }
    }

    if(showEdit){
        return  <TodoForm formTitle={"ویرایش"} initialTodo={todo} submitFunc={submitFunc} cancelFunc={toggleForm}/>
    }

    return <li className={`flex shadow-md  p-2 gap-3 items-center ${isCompleted ? "line-through " : ''}`}>
        <div>
            <input type="checkbox" onChange={handleCheckChange} checked={isCompleted} className="form-checkbox text-blue-500 h-4 w-4"/>
        </div>
        <span className={'font-bold'}>{title}</span>
        <span>{description}</span>
        {/*Action icons*/}
        <span className={'flex gap-2 mr-auto px-2'}>
                <button onClick={toggleForm}>
                <FontAwesomeIcon  className={'text-orange-600'} icon={faEdit}/>
                 </button>
                <button  onClick={handleDelete}>
                <FontAwesomeIcon className={'text-red-600'} icon={faTrash}/>
                    </button>
            </span>
    </li>
}


export  default  TodoList