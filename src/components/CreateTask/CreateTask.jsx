import { useState } from 'react';

const CreateTask = ({ addNewTask }) => {
    const [text, setText] = useState('')
    return (
        <div>
            <input type="text" placeholder="Type your task here" value={text} onChange={(event) => { setText(event.target.value) }} />
            <button onClick={() => {
                if (text) {
                    addNewTask(text);
                    setText('');
                } else {
                    alert('Invalid Text');
                }
            }}>Add a Task</button>
        </div>
    );
};

export default CreateTask;