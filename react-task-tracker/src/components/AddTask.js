import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
   
    const onSubmit = (e) => {

        e.preventDefault()

        if(!text){
            alert("please enter task")
            return
        }

        const id = Math.floor(Math.random() * 10000) + 1;
        onAdd({id,text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }


    return (
        <div style={{border: "1px solid steelblue", padding: "30px",borderRadius: "5px"}}>
            <h2>Add Task</h2>
            <form className='add-form' onSubmit={onSubmit} >
        <div className='form-control' >
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text}   onChange={(e) => setText(e.target.value) }></input>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' value={day} onChange={(e) => setDay(e.target.value) } placeholder='Day & Time'></input>
        </div><div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder}  onChange={(e) => setReminder(e.currentTarget.checked) } placeholder='Add Task'></input>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block'></input>
    </form>
        </div>
        
    )
}

export default AddTask
