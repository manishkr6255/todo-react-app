export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// Action to add a task
export const addTask = (text) => ({
    type: ADD_TASK,
    payload: text
});

// Action to remove a task by index
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: id
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id
});
