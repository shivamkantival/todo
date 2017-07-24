
let nextTodoId = 1;

export const toggleTodo = (id) => {
    console.log(id);
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const addTodo = (text) => (
    {
        type: 'ADD_TODO',
        text,
        id: nextTodoId++
    }
)

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}