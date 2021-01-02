import * as constants from '../contants';

export function addTodo(todo) {
    return { type: constants.ADD_TODO, todo };
}

export function toggleTodo(id) {
    return { type: constants.TOGGLE_TODO, id };
}

export function deleteTodo(id) {
    return { type: constants.DELETE_TODO, id };
}

export function deleteAllCompleted() {
    return { type: constants.DELETE_ALL_COMPLETED };
}

export function setFilter(filter) {
    return { type: constants.SET_FILTER, filter };
}