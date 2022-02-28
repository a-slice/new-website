import React from 'react'
import MyTaskDay from './MyTaskDay'
import { taskData } from '../../Data/Tasks'

//contains all the tasks
const MyTasksDay = () => {    
    return (
        <>
           {taskData.map((task) => 
           (<MyTaskDay key={task.id} task={task} />)
           )}
        </>
    )
}

export default MyTasksDay