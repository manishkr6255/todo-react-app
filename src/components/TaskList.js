import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

// TaskList component for displaying the list of tasks
const TaskList = () => {
    const tasks = useSelector(state => state.tasks);

    return (
        <div className="task_list_field">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
