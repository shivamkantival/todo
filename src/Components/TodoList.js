import React from 'react';

const Todo = ({ onclick, completed, text, id}) => {
    return (
        <li 
            onClick={onclick}
            style={{
                textDecoration: completed? 'line-through' : 'none'
            }}
        >
            {text}
        </li>
    )
}

export const TodoList = ({todos, onTodoClick}) => {

    return <ul>
        {
            todos.map( todo => (
                <Todo key={todo.id} onclick={() => onTodoClick(todo.id)} {...todo} />
            ))
        }
    </ul>
}