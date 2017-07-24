import {combineReducers} from 'redux';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                    completed: false,
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                // if(todo.id === action.id) {
                //     return {
                //         text: todo.text,
                //         id: todo.id,
                //         completed: !todo.completed,
                //     }
                // }
                // return todo;
                return (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
            })
        default:
            return state
    }
}

const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export const reducer = combineReducers({
    todos,
    visibilityFilter  
});