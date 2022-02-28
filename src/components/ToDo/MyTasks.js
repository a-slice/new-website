import React from 'react'
import MyTask from './MyTask'
import { taskData } from '../../Data/Tasks'

//contains all the tasks
const MyTasks = () => {    
    return (
        <>
           {taskData.map((task) => 
           (<MyTask key={task.id} task={task} />

           ))}
        </>
    )
}

export default MyTasks