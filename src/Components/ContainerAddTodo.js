import {connect} from 'react-redux';
import {addTodo} from '../actions';
import AddTodoForm from './Addtodo';

const mapDispatchToProps = (dispatch) => {
    return{
        onsubmit: (text) => {
            if(text);
                dispatch(addTodo(text));
        }
    }
}

const AddTodo = connect(
    null,
    mapDispatchToProps
)(AddTodoForm);

export default AddTodo;