import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
//import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  // const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
            {
                id: 1,
                text: 'parts of the pony',
                completed: false
            },
            {
                id: 2,
                text: 'grooming kit',
                completed: true
            },
            {
                id: 3,
                text: 'parts of the saddle/bridle',
                completed: false
            }
            ]
    )

  //add task
  // const addTask = (task) =>
  // {
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newTask = { id, ...task }
  //   setTasks([...tasks, newTask])
  // }  

  //delete task
  const deleteTask = (id) =>
  {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle completed
  const toggleCompleted = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed} : task))
    console.log('toggle completed')
  }
  return (
    <div className="container">
      
      <Header />
      
      {tasks.length > 0 
      ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleCompleted}/> 
      : 'No tasks available'
      }
    </div>
  );
}

export default App;
