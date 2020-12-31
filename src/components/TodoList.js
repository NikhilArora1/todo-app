import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

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

export default function TodoList(props) {
    const classes = useStyles();
    const filteredTodos = props.todos.items.filter(todo => {
        if (props.todos.filter === 'Active') {
            return !todo.completed;
        } else if (props.todos.filter === 'Completed') {
            return todo.completed;
        } else {
            return todo;
        }
    });

    const handleToggle = (value) => () => {
        let updatedTodos = props.todos.items.filter(todo => todo.id !== value.id);
        updatedTodos = [
            ...updatedTodos,
            {
                ...value,
                completed: !value.completed
            }
        ];
        props.updateTodos(updatedTodos);
    };

    const removeTodo = (value) => () => {
        const updatedTodos = props.todos.items.filter(todo => todo.id !== value.id);
        props.updateTodos(updatedTodos);
    }

    return (
        <List className={classes.root}>
            {filteredTodos.map((todo) => {
                const labelId = `checkbox-list-label-${todo.id}`;
                const color = todo.completed ? classes.completed : classes.pending;

                return (
                    <ListItem key={todo.id} dense button onClick={handleToggle(todo)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={todo.completed}
                                tabIndex={-1}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={todo.text} className={color} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="clear" onClick={removeTodo(todo)}>
                                <ClearIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
}