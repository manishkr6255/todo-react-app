import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions&reducers/actions';

// TaskInput component for adding a new task
const TaskInput = () => {
    const [task, setTask] = useState('');  // Local state to keep track of the task input
    const dispatch = useDispatch();    // Hook to access the Redux dispatch function

      // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {  // Ensure task is not empty
            dispatch(addTask(task));   // Dispatch the addTask action
            setTask('');  // Reset the input field
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task_input_field">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}  // Update state on input change
                placeholder="Add your new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TaskInput;
