import React from 'react';
import VisibleTodoList from './Components/ContainerTodoList';
import AddTodo from './Components/ContainerAddTodo';
import Footer from './Components/Footer';
// import ViewFilter from './Components/ViewFilter'

function App(props) {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
}

export default App;