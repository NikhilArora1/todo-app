import './Todo.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

function Todo() {
    return (
        <div className="container">
            <h1 className="header">TODO</h1>
            <div className="add-todo"><AddTodo /></div>
            <div className="list" ><TodoList /></div>
            <Footer />
        </div>
    );
}

export default Todo;