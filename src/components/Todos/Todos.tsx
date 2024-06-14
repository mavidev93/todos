import React, {useCallback} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrash, faEdit} from "@fortawesome/free-solid-svg-icons";
import {useAppDispatch, useAppSelector} from "../../redux/app/hooks";
import {getTodosThunk, Todo} from "../../redux/slices/todos/todosSlice";
import {addTodo} from "../../api/todosApi";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;



//Todos wrapper component
function Todos() {
    return <div className={'p-4 container'}>
        {/*Add Todo*/}
      <AddTodo/>
        {/*Todos List*/}
        <TodoList/>
        <div>

        </div>
    </div>
}


export default Todos


function TodoList() {
    //TODO: delete and edit(todo form) Modal
    const {todosList, status, error} = useAppSelector(state => state.todos)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        //Initially get todos when status is idle
        if (status === 'idle') {
            dispatch(getTodosThunk())
        }
    }, [])


    return <div className={'mt-8 shadow-md p-3'}>
        <h3 className={'text-lg '}> لیست تسک ها</h3>
        <ul className={'flex flex-col gap-5 mt-4'}>
            {todosList?.map((item) => <li key={item.id}
                className={`flex shadow-md  p-2 gap-3 items-center ${item.isCompleted ? "line-through " : ''}`}>
                <div>
                    <input type="checkbox" checked={item.isCompleted} className="form-checkbox text-blue-500 h-4 w-4"/>
                </div>
                <span className={'font-bold'}>{item.title}</span>
                <span>{item.description}</span>
                {/*Action icons*/}
                <span className={'flex gap-2 mr-auto px-2'}>
                <button>
                <FontAwesomeIcon className={'text-orange-600'} icon={faEdit}/>
</button>
                <button>
                <FontAwesomeIcon className={'text-red-600'} icon={faTrash}/>
                    </button>
            </span>
            </li>)}
        </ul>
    </div>
}



function TodoForm({submitFunc, cancelFunc}: { submitFunc: (todo:Todo)=>void, cancelFunc: any }) {

    const [formData, setFormData] = React.useState({
        title: '',
        description: ''
    });


    //Handlers
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        submitFunc({...formData,id:crypto.randomUUID(),isCompleted:false});
    };

    return <form onSubmit={handleSubmit} className={'shadow-md p-3'}>
        <div className="mb-4 max-w-[200px]">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                عنوان
            </label>
            <input
                value={formData.title}
                onChange={handleChange}
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                type="text" placeholder="عنوان"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                توضیخات
            </label>
            <textarea
                value={formData.description}
                onChange={handleChange}
                className=" resize-none appearance-none border rounded w-[250px]  md:w-[500px] h-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                placeholder="توضیحات"

            />
        </div>
        <div className={'flex gap-2'}>
            <button type='submit' className={'bg-primaryColor text-white rounded py-2 px-4'}>ارسال</button>
            <button type='button' onClick={cancelFunc} className={'bg-gray-600 text-white rounded py-2 px-4'}>انصراف
            </button>
        </div>
    </form>
}

function AddTodo(){
    const [showForm, setShowForm] = React.useState(false)
    const dispatch = useAppDispatch()
    //Handlers
    const toggleForm =()=> setShowForm(!showForm)
    const submitTodo = async (todo:Todo)=>{
        try {
            await  addTodo(todo)
            // refetch data from server
            dispatch(getTodosThunk())
            // NOTICE a success toast is a good idea here
            toggleForm()
        }catch (e){
            console.log(e)

        }
    }
    return   <>
        {showForm ? <TodoForm submitFunc={submitTodo} cancelFunc={toggleForm}/>
            : <button className={'bg-primaryColor text-white rounded py-2 px-4'} onClick={toggleForm}>
                <span>       <FontAwesomeIcon icon={faPlus}/>
               <span className={'mr-2'}>تسک جدید </span>
                </span>

            </button>

        }
    </>

}