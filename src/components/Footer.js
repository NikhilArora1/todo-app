import './Footer.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Footer(props) {
    const todosLeft = props.todos.items.filter(todo => !todo.completed);
    const removeTodos = () => {
        props.updateTodos(todosLeft);
    }

    const filterTodos = (condition) => () => {
        props.filter(condition);
    }

    return (
        <div>
            <div className="footer">
                <div>{todosLeft.length} item(s) left</div>
                <div>
                    <ButtonGroup variant="text" size="small" color="inherit">
                        <Button className="link" color={props.todos.filter === 'All' ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos('All')}>All</Button>
                        <Button className="link" color={props.todos.filter === 'Active' ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos('Active')}>Active</Button>
                        <Button className="link" color={props.todos.filter === 'Completed' ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos('Completed')}>Completed</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <Button color='inherit' className="link" style={{ textTransform: 'none' }} onClick={removeTodos}>
                        Clear Completed
                </Button>
                </div>
            </div>

            <div className="small-footer">
                <div className="todo-info">
                    <div>{todosLeft.length} item(s) left</div>
                    <div>
                        <Button color='inherit' className="link" style={{ textTransform: 'none' }} onClick={removeTodos}>
                            Clear Completed
                    </Button>
                    </div>
                </div>
                <div className="filter">
                    <ButtonGroup variant="text" size="small" color="inherit">
                        <Button className="link" color={props.todos.filter === 'All' ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos('All')}>All</Button>
                        <Button className="link" color={props.todos.filter === 'Active' ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos('Active')}>Active</Button>
                        <Button className="link" color={props.todos.filter === 'Completed' ? 'primary' : 'inherit'} style={{ textTransform: 'none' }} onClick={filterTodos('Completed')}>Completed</Button>
                    </ButtonGroup>
                </div>

            </div>
        </div>


    );
}