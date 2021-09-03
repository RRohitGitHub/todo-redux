import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../actions';

function TodoItem({itemData}) {
    const [editClicked,setEditClicked] = useState(false);
    const textInput = useRef(null);
    
    const onEditSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateTodo({message:textInput.current.value,id:itemData.id}))
        setEditClicked(false);
    }

    const renderEdit = ()=>{
        return (
            <form onSubmit={onEditSubmit}>
                <div>
                    <input ref={textInput} defaultValue={itemData.task} type="text" placeholder="Enter todo item" name="userInput"/>
                    <button type="submit">Save Changes</button>
                </div>
                
            </form>
        )
    }

    const dispatch = useDispatch();
    return (
        <>
        {
            editClicked ? 
            renderEdit():
            <div>
                 {itemData.task}
                <button onClick={()=>setEditClicked(!editClicked)}>EDIT</button>
                <button onClick={()=>dispatch(deleteTodo(itemData.id))}>DELETE</button>
            </div>      
        }
        </>
    )
}

export default TodoItem
