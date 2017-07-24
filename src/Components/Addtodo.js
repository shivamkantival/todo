import React from 'react';

const AddTodoForm = ({onsubmit}) => {
    let text;
    return <div>
        <form onSubmit={(e) => {
                                    e.preventDefault();
                                    onsubmit(text.value);
                                }
                        } 
        >
            <input type='text' ref={input => text=input} />
            <button type='submit'>
                Add AddTodo
            </button>
        </form>
    </div>
}

export default AddTodoForm;