import React from 'react'
import { useState } from 'react'

const Update = ({taskdata,onUpd}) => {
    const [text, settext] = useState(taskdata.text)
    const [day, setday] = useState(taskdata.day)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please Add a Task')
            return
        }
        const id = taskdata.id;
        onUpd(id,{text, day });
        settext('')
        setday('')
    }

    return (
        <div style={{border: "1px solid steelblue", padding: "30px",borderRadius: "5px"}}>
            <h2>Update Task</h2>
            <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => settext(e.target.value)}
                />
            </div>

            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setday(e.target.value)} />
            </div>

            <input type="submit" value='Update Task' className="btn btn-block" />
        </form>
        </div>
    )
}

export default Update
