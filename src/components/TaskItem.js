import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions&reducers/actions';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div className="task_item_field">
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={() => dispatch(toggleTask(task.id))}
            >
                {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
    );
};

export default TaskItem;
