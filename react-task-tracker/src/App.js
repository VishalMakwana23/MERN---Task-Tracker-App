import { useState, useEffect  } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Notify from "./components/Notify";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import axios from "axios";
import Update from "./components/Update";
const App = () =>  {

  const [user,setLoginUser] = useState({})
  const [showAddTask, setShowAddTask] = useState(false)
  const [showUpdTask, setShowUpdTask] = useState(false)
  const [updTaskData, setUpdTaskData] = useState([])
  const [tasks,setTasks] = useState([])

// Set task when Insert Update Delete
  const setTaskData = () => {
    axios.get('api/list').then(res => {
      setTasks(res.data.data)
    });
  }
//Fetch data once
  useEffect(() => {
    axios.get('api/list').then(res => {
      setTasks(res.data.data)
    });
  },[])

//Add Task
  const addTask = (task) => {
    axios.post("/api/addTasks", task).then(res => {
      alert("Task Added")
      setTaskData()
    });
  };

//Delete task
  const deleteTask  = async (id) => {
    axios.delete("api/delete/"+id).then(res => {
      if(res.data.data){
        alert("Task Deleted")
        setTaskData()
      } else {
        alert("Can't Delete task")
      }
    });
  };
//Toggle Task
const toggleReminder = async (taskId,reminder) => {
  axios.put("/api/updateTask/reminder",{id:taskId,reminder:reminder})
  .then((res) => {
    setTaskData()
  })

}
// Find Task
  const findTask = async (id) => {
    const taskData = await axios.get("/api/find/"+id);
    return taskData.data.data;
  }

//for show update model
  const updateTask = async (id) => {
    const getTask = await findTask(id);
    setUpdTaskData(getTask);
    setShowUpdTask(!showUpdTask)
  }

  //Update Task
  const updTask = async (id,updateTask) => {
    axios.put('/api/updateTask/'+id,updateTask).then(res => {
      setShowUpdTask(!showUpdTask)
      setTaskData()
    })
  }


return (

    <Router>
    <div className='container'>
       
      <Routes>

      <Route  path="/" element={user && user.email ? <>
              <Header
                 onAdd={() => setShowAddTask(!showAddTask)}
                 showAdd={showAddTask}
               />   
              {showAddTask && <AddTask onAdd={addTask}/>}
              {showUpdTask && <Update  onUpd={updTask} taskdata={updTaskData}/>}
              {tasks.length > 0 ? (           
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                  onUpdate={updateTask}
                />
              ) : (
                'No Tasks To Show'
              )}
              <div>
              <Logout color="red" text="Logout" setLoginUser={setLoginUser} />
              </div>
            </>
             : 
             <Login setLoginUser={setLoginUser}/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/notify' element={<Notify />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login setLoginUser={setLoginUser}/>} />
        
      </Routes>
      <Footer />
     
    </div>
  </Router>
   
  );
}

export default App;
