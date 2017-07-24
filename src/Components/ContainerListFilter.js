import Link from './FilterLink';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions';

const mapStatetoProps = (state, ownProps) => {
    const {text, filter} = ownProps;
    return {
        text,
        filter,
        active : filter === state.visibilityFilter,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setFilter: (filter) => {
            dispatch(setVisibilityFilter(filter))
        }
    }
}

const ListFilter = connect(
    mapStatetoProps,
    mapDispatchToProps
)(Link);

export default ListFilter;