import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(
    [
            {
                id: 1,
                text: 'parts of the pony',
            },
            {
                id: 2,
                text: 'grooming kit',
            },
            {
                id: 3,
                text: 'parts of the saddle/bridle'
            }
            ]
    )
  //delete task
  const deleteTask = (id) =>
  {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks available'
      }
    </div>
  );
}

export default App;
