import './App.css';
import Header from './components/Header';
import { taskData } from './Data/Tasks';
//import AddTask from './components/ToDo/AddTask';
import { useState } from 'react';
import MyTasks from './components/ToDo/MyTasks'
import Calendar from './components/Calendar/Calendar'
function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  // placeholder from before json data
  // const [tasks, setTasks] = useState(
  //   [
  //           {
  //               id: 1,
  //               text: 'parts of the pony',
  //               completed: false
  //           },
  //           {
  //               id: 2,
  //               text: 'grooming kit',
  //               completed: true
  //           },
  //           {
  //               id: 3,
  //               text: 'parts of the saddle/bridle',
  //               completed: false
  //           }
  //           ]
  //   )



  //add task
  // const addTask = (task) =>
  // {
  //   const id = Math.floor(Math.random() * 10000) + 1
  //   const newTask = { id, ...task }
  //   setTasks([...tasks, newTask])
  // }  

  //delete task
  // const deleteTask = (id) =>
  // {
  //   setTasks(tasks.filter((task) => task.id !== id))
  // }

  //toggle completed
  // const toggleCompleted = (id) => {
  //   setTasks(tasksData.map((task) => taskData.id === id ? { ...task, completed: !taskData.completed} : task))
  //   console.log('toggle completed')
  // }
  return (
    <>
    <div className="container">     
      <Header />
      
      {/* {taskData.length > 0 
      ? 
      //<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleCompleted}/> 
      <Tasks />
      : 'No tasks available'
      } */}
      <MyTasks />   
    </div>
  <div className="calendar-container">
    <Calendar />
  </div>
  </>
  );
}

export default App;
