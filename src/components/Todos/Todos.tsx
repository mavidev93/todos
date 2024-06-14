import React from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

//Todos wrapper component
function Todos() {
    return <div className={'p-4 container'}>
        {/*Add Todo*/}
        <AddTodo/>
        {/*Todos List*/}
        <TodoList/>
    </div>
}


export default Todos







