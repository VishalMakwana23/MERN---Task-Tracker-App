import React from 'react'
import { FaTimes,FaEdit } from 'react-icons/fa'

const Task = ({ task,onDelete,onToggle,onUpdate }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={ () => onToggle(task.id,!task.reminder)}>

            <h3>
                {task.text}
                <FaTimes style={{color:'red', cursor:
                'pointer'}}
                 onClick={() => onDelete(task.id)}/>
            </h3>

            <p>{task.day}</p>
            <h3><p></p><FaEdit 
                style={{color:'blue', cursor:'pointer'}}
                 onClick={() => onUpdate(task.id)}/>
            </h3>
            
        </div>
    )
}

export default Task
