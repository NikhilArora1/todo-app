import * as constants from '../contants';

let newId = 0;
export default function todoReducer(state = [], action) {
    switch (action.type) {
        case constants.ADD_TODO:
            const todoToAdd = {
                id: newId++,
                text: action.todo,
                completed: false
            };
            return [...state, todoToAdd];
        case constants.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        case constants.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case constants.DELETE_ALL_COMPLETED:
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}