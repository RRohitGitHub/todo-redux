const initialState = {
    data : []
}

const todos = (state=initialState,action) => { 
    switch(action.type){

        case "ADD_TODO":
            return{
                ...state,
                data:[...state.data,action.payload]
            }

        case "DELETE_TODO":
            return{
                ...state,
                data:[...state.data.filter((todo)=>todo.id!==action.payload)]
            }

        case "UPDATE_TODO":
            console.log(action,"FROM UPDATE_TODO")
            return{
                ...state,
                data:[...state.data.filter((todo)=>todo.id!==action.payload.id),{task:action.payload.message,id:action.payload.id}]
            }

        default:
            return state
    }
}

export default todos