import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'
import { FaRegSquare } from 'react-icons/fa'


//structure for a singular task
const MyTask = ( { task }) => {
    return (
        <div className="task">
            <h3>
            {task.task}
            {task.completed ? 
            <FaCheck style={{ color: 'green'}} 
            />
            :
            <FaRegSquare  
            />
            } </h3>
            <p>{task.text}</p>

        </div>
    )
}

export default MyTask