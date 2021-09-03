import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {

    const taskObj = useSelector((state)=>state.todos.data)
    const taskItems = taskObj.map((task)=>{
        return <TodoItem itemData={task}/>
    })

    return (
        <div>
            {taskItems}
        </div>
    )
}

export default TodoList
