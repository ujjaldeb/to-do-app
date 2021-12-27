import { useState } from "react";
import Layout from "./components/Layout/Layout";
import shortid from 'shortid';
import CreateTask from "./components/CreateTask/CreateTask";
import ShowTasks from "./components/ShowTasks/ShowTasks";
import FilteredTasks from "./components/FilteredTasks/FilteredTasks";



function App() {
  const [tasks, setTasks] = useState([]);
  // const [visibility, setVisibility] = useState('all');

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  }

  const handleDeleteTheTask = (taskId) => {

    const index = tasks.findIndex((task) => {
      return task.id === taskId;
    });
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <Layout>
      <h1>Tasks</h1>
      <CreateTask addNewTask={addNewTask} />
      <ShowTasks tasks={tasks} handleDeleteTheTask={handleDeleteTheTask} />
      <h4>Browse tasks by specific category</h4>
      <FilteredTasks tasks={tasks} handleDeleteTheTask={handleDeleteTheTask} />
    </Layout>
  );
};

export default App;
