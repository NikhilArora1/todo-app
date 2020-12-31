import './Todo.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import { useState } from 'react';

let newId = 0;
function Todo() {
    const [todos, setTodos] = useState({
        items: [],
        filter: 'All'
    });

    const onAdd = (todo) => {
        const todoToAdd = {
            id: newId++,
            text: todo,
            completed: false
        }
        setTodos(prev => ({
            ...prev,
            items: [todoToAdd, ...prev.items]
        }));
    }

    const handleChange = (todos) => {
        todos.sort((a, b) => b.id - a.id);
        setTodos(prev => ({
            ...prev,
            items: todos
        }));
    }

    const filterTodos = (condition) => {
        setTodos(prev => ({
            ...prev,
            filter: condition
        }));
    }

    return (
        <div className="container">
            <h1 className="header">TODO</h1>
            <div className="add-todo"><AddTodo onAdd={onAdd} /></div>
            {todos.items.length>0 && <div className="list" ><TodoList todos={todos} updateTodos={handleChange} /></div>}
            {todos.items.length>0 && <Footer todos={todos} updateTodos={handleChange} filter={filterTodos} />}
        </div>
    );
}

export default Todo;