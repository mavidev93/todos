//Todos wrapper component
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function Todos() {
    //TODO: showForm state will be add here and will show addButton or form

    return <div className={'p-4 container'}>
        {/*Add Todo*/}
        <>
            <button className={'bg-primaryColor text-white rounded p-2'}>
                <span>       <FontAwesomeIcon icon={faPlus}/>
               <span className={'mr-2'}>تسک جدید </span>
                </span>

            </button>
            <form>
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
                <button className={'bg-primaryColor text-white rounded p-2'}>ارسال</button>
                    <button className={'bg-gray-600 text-white rounded p-2'}>انصراف</button>
                </div>
            </form>
        </>
        {/*Todos List*/}
    </div>
}


export default Todos