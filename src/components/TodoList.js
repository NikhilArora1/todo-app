import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import * as todoActions from '../redux/actions/todoActions';
import { FILTERS } from '../redux/contants';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        backgroundColor: '#777a92',
        "& .MuiButtonBase-root.MuiListItem-root.MuiListItem-dense.MuiListItem-gutters.MuiListItem-button": {
            borderBottom: '1px solid #25273c'
        },
        "& .MuiCheckbox-root": {
            color: '#25273c'
        },
        "& .MuiCheckbox-root.Mui-checked": {
            color: 'white'
        }
    },
    completed: {
        textDecoration: 'line-through',
        color: '#25273c'
    },
    pending: {
        color: 'white'
    }
}));

function TodoList(props) {
    const classes = useStyles();

    return (
        <div>
            {props.items && props.items.length ? 
            <List className={classes.root}>
                {props.items.map((todo) => {
                    const labelId = `checkbox-list-label-${todo.id}`;
                    const color = todo.completed ? classes.completed : classes.pending;

                    return (
                        <ListItem key={todo.id} dense button onClick={() => props.toggleTodo(todo.id)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.completed}
                                    tabIndex={-1}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={todo.text} className={color} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="clear" onClick={() => props.deleteTodo(todo.id)}>
                                    <ClearIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
            : 'No items left'}
        </div>

    )
}

function mapStateToProps(state) {
    const items = state.items.filter(todo => {
        if (state.filter === FILTERS.ACTIVE) {
            return !todo.completed;
        } else if (state.filter === FILTERS.COMPLETED) {
            return todo.completed;
        } else {
            return todo;
        }
    });
    return { items }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: id => dispatch(todoActions.toggleTodo(id)),
        deleteTodo: id => dispatch(todoActions.deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);