import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

const MyTaskDay = ( { task, onDelete, onToggle }) => {
    return (
        <div>
            {task.day == "Thursday"  &&
        <div className="task">
            
            <h3>
            {task.text} 
            {task.completed ? 
            <FaCheck style={{ color: 'blue', cursor: 'pointer'}} 
            onClick={() => {onToggle(task.id)}}/>
            :
            <FaTimes style={{ color: 'red', cursor: 'pointer'}} 
            onClick={() => {onToggle(task.id)}}/>
            }
            
            </h3> 
        </div>}
        </div>
    )
}

export default MyTaskDay