import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './actions';

const initialState = {
    tasks: []
};

// Reducer to handle task actions
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };
        default:
            return state;
    }
};

export default taskReducer;
