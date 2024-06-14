import React from "react";
import {useAppDispatch} from "../../redux/app/hooks";
import {getTodosThunk, Todo} from "../../redux/slices/todos/todosSlice";
import {addTodo} from "../../api/todosApi";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import TodoForm from "./TodoForm";

function AddTodo() {
    const [showForm, setShowForm] = React.useState(false)
    const dispatch = useAppDispatch()
    //Handlers
    const toggleForm = () => setShowForm(!showForm)
    const submitTodo = async (todo: Todo) => {
        try {
            await addTodo({...todo, id: crypto.randomUUID(), isCompleted: false})
            // refetch data from server
            dispatch(getTodosThunk())
            // NOTICE a success toast is a good idea here
        } catch (e) {
            console.log(e)

        }
    }

    //return based on showForm
    if (showForm) {
        return <TodoForm formTitle={'تسک جدید'} submitFunc={submitTodo} cancelFunc={toggleForm}/>

    }

    return <button className={'bg-primaryColor text-white rounded py-2 px-4'} onClick={toggleForm}>
                <span>       <FontAwesomeIcon icon={faPlus}/>
               <span className={'mr-2'}>تسک جدید </span>
                </span>

    </button>


}

export default AddTodo