import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

const Task = ( { task, onDelete, onToggle }) => {
    return (
        <div className="task">
            <h3>
            {task.text} 
            {task.completed ? 
            <FaCheck style={{ color: 'green', cursor: 'pointer'}} 
            onClick={() => {onToggle(task.id)}}/>
            :
            <FaTimes style={{ color: 'red', cursor: 'pointer'}} 
            onClick={() => {onToggle(task.id)}}/>
            }
            </h3>
        </div>
    )
}

export default Task
