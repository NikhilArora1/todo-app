import './Footer.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import * as todoActions from '../redux/actions/todoActions';
import { FILTERS } from '../redux/contants';
import { connect } from 'react-redux';

function Footer(props) {
    const todosLeft = props.items.filter(todo => !todo.completed);

    const filterTodos = (condition) => () => {
        props.filterTodos(condition);
    }

    return (
        <div>
            <div className="footer">
                <div>{todosLeft.length} item(s) left</div>
                <div>
                    <ButtonGroup variant="text" size="small" color="inherit">
                        <Button className="link" color={props.filter === FILTERS.ALL ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos(FILTERS.ALL)}>All</Button>
                        <Button className="link" color={props.filter === FILTERS.ACTIVE ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos(FILTERS.ACTIVE)}>Active</Button>
                        <Button className="link" color={props.filter === FILTERS.COMPLETED ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos(FILTERS.COMPLETED)}>Completed</Button>
                    </ButtonGroup>
                </div>
                <Button color='inherit' className="link" style={{ textTransform: 'none' }} onClick={() => props.deleteAllCompleted()}>Clear Completed</Button>
            </div>

            <div className="small-footer">
                <div className="todo-info">
                    <div>{todosLeft.length} item(s) left</div>
                    <Button color='inherit' className="link" style={{ textTransform: 'none' }} onClick={() => props.deleteAllCompleted()}>Clear Completed</Button>
                </div>
                <div className="filter">
                    <ButtonGroup variant="text" size="small" color="inherit">
                        <Button className="link" color={props.filter === FILTERS.ALL ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos(FILTERS.ALL)}>All</Button>
                        <Button className="link" color={props.filter === FILTERS.ACTIVE ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos(FILTERS.ACTIVE)}>Active</Button>
                        <Button className="link" color={props.filter === FILTERS.COMPLETED ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos(FILTERS.COMPLETED)}>Completed</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>

    );
}


function mapStateToProps(state) {
    return {
        items: state.items,
        filter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteAllCompleted: () => dispatch(todoActions.deleteAllCompleted()),
        filterTodos: filter => dispatch(todoActions.setFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);