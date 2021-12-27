import React, { useState } from 'react';

const FilteredTasks = ({ tasks, handleDeleteTheTask }) => {
    const [filteredTasks, setFilteredTasks] = useState([]);

    const handleTaskFiltering = (e) => {
        if (e.target.value === 'all') {
            setFilteredTasks([...tasks]);
            // console.log(filteredTasks);
        } else if (e.target.value === 'completed') {
            const completedTasks = tasks.filter(task => task.isCompleted === true);
            setFilteredTasks([...completedTasks]);
            // console.log(filteredTasks);
        } else if (e.target.value === 'incompleted') {
            const incompletedTasks = tasks.filter(task => task.isCompleted === false);
            setFilteredTasks([...incompletedTasks]);
            // console.log(filteredTasks);
        }
    }

    return (
        <div>
            <select onChange={handleTaskFiltering}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incompleted">Incompleted</option>
            </select>
            <ul>
                {filteredTasks.map(filteredTask => <li key={filteredTask.id}>
                    {filteredTask.text}
                    <button onClick={() => handleDeleteTheTask(filteredTask.id)}>Delete</button>
                </li>)}
            </ul>
        </div>
    );
};

export default FilteredTasks;