import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import cuid from 'cuid';
import { addTodo } from '../../actions';

function AddTodoItems() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch()

    const handleInputChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo({task:input,id:cuid()}))
        e.target.userInput.value = ''
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e)=>{handleInputChange(e)}} type="text" value={input} placeholder="Enter todo item" name="userInput"/>
                    <button type="submit">Add Todo</button>
                </div>
                
            </form>
        </div>
    )
}

export default AddTodoItems
