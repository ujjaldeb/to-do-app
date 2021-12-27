import React from 'react';

const ListItem = ({ task, handleDeleteTheTask }) => {
    const handleTaskStatusChange = (e) => {
        task.isCompleted = true;
    }

    return (
        <li>
            <input type="checkbox" />
            {task.text}
            <button onClick={handleTaskStatusChange}>Update</button>
            <button onClick={() => handleDeleteTheTask(task.id)}>Delete</button>
        </li>
    );
};

export default ListItem;