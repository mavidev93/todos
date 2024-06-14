//Todos wrapper component
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus,faTrash,faEdit} from "@fortawesome/free-solid-svg-icons";


type SingleTodo = { id: string, title: string, description: string, isCompleted: boolean }
const dummyTodos: SingleTodo[] = [{
    id: "fdasf",
    title: "شستن ظرف ها",
    description: "ی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح",
    isCompleted: false
},{
    id: "fdjslfw",
    title: "خرید میوه",
    description: "ی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح",
    isCompleted: true
},{
    id: "dsfdazxffdasf",
    title: "بانک",
    description: "آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح  ی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح",
    isCompleted: false
},]

function Todos() {
    //TODO: showForm state will be add here and will show addButton or form

    return <div className={'p-4 container'}>
        {/*Add Todo*/}
        <>
            <button className={'bg-primaryColor text-white rounded py-2 px-4'}>
                <span>       <FontAwesomeIcon icon={faPlus}/>
               <span className={'mr-2'}>تسک جدید </span>
                </span>

            </button>
            <form className={'shadow-md p-3'}>
                <div className="mb-4 max-w-[200px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        عنوان
                    </label>
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title" type="text" placeholder="عنوان"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        توضیخات
                    </label>
                    <textarea
                        className=" resize-none appearance-none border rounded w-[250px]  md:w-[500px] h-[100px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description" placeholder="توضیحات"

                    />
                </div>
                <div className={'flex gap-2'}>
                    <button className={'bg-primaryColor text-white rounded py-2 px-4'}>ارسال</button>
                    <button className={'bg-gray-600 text-white rounded py-2 px-4'}>انصراف</button>
                </div>
            </form>
        </>
        {/*Todos List*/}
        <TodoList/>
        <div>

        </div>
    </div>
}


export default Todos


function TodoList() {
    //TODO: get todos from redux store
    //TODO: delete and edit(todo form) Modal
    return <div className={'mt-8 shadow-md p-3'}>
        <h3 className={'text-lg '}> لیست تسک ها</h3>
    <ul className={'flex flex-col gap-5 mt-4'}>
        {dummyTodos.map((item) => <li className={ `flex shadow-md  p-2 gap-3 items-center ${item.isCompleted?"line-through ":''}`}>
            <div>
            <input type="checkbox" checked={item.isCompleted} className="form-checkbox text-blue-500 h-4 w-4"/>
            </div>
            <span className={'font-bold'}>{item.title}</span>
            <span>{item.description}</span>
            {/*Action icons*/}
            <span className={'flex gap-2 mr-auto px-2'}>
                <button>
                <FontAwesomeIcon className={'text-orange-600'}  icon={faEdit}/>
</button>
                <button>
                <FontAwesomeIcon className={'text-red-600'} icon={faTrash}/>
                    </button>
            </span>
        </li>)}
    </ul>
    </div>
}
