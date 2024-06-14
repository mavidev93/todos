import {Todo} from "../../redux/slices/todos/todosSlice";
import React from "react";

type Props = { formTitle:string,submitFunc: (todo:any)=>void, cancelFunc: any,initialTodo?:Todo }
function TodoForm({ formTitle,submitFunc, cancelFunc,initialTodo}:Props ) {

    const [formData, setFormData] = React.useState(initialTodo??{
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       await submitFunc(formData);
        setFormData({
            title: '',
            description: ''
        })
    };

    return <div className={'shadow-md p-3 '}>
        <h3 className={'text-base mb-3'}>{formTitle}</h3>
        <form onSubmit={handleSubmit} >
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
                    required
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

    </div>
}

export  default  TodoForm