import React from 'react';
import ListItem from '../ListItem/ListItem';


const ShowTasks = ({ tasks, handleDeleteTheTask }) => {

    return (
        <div>
            {tasks.length > 0 ? <ul>
                {tasks.map(task => <ListItem key={task.id} task={task} handleDeleteTheTask={handleDeleteTheTask} />)}
            </ul> : <p>No tasks found!</p>}
        </div>
    );
};

export default ShowTasks;