
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");

const taskModel = require("./models/task");
const userModel = require('./models/user')
mongoose
  .connect("mongodb://localhost:27017/taskTracker")
  .then(() => console.log("mongo db connected"));

app.get("/", (req, res) => res.send("Hello Fullstack!"));


//Register User
app.post("/api/registration", (req, res) => {
  const  newUser  = req.body;
  userModel.create(newUser);
  return res.json({ data: "registered successfully, Please Login Now" });
});

//Login user
app.post('/api/login' , async (req , res)=>{

  const email = req.body.email;
  const pass = req.body.password;
  const user = await userModel.findOne({username:email,password:pass});

  if(user){
      return res.json({message: "login successfull",user:user})
  }else{
    return res.json({message: "Wrong Credentials"})
  }
});

//TASK------------------------------------------------------------------

// Add Task 
app.post("/api/addTasks", (req, res) => {
  const  newtask  = req.body;
  taskModel.create(newtask);
  return res.json({ data: "Task Added Successfully",data:newtask });
});

app.listen(port, () => console.log(`server running on port 4000`));


// Get list task
app.get("/api/list", async (req, res) => {
  const taskList = await taskModel.find();

  if (taskList.length === 0) {
    return res.json({ data: "Task is Empty" });
  }
  return res.json({ data: taskList });
});

//Delete Task

app.delete('/api/delete/:id',async (req,res) =>{
  const deleteuser = await taskModel.findOneAndDelete({
    id:req.params.id
  });
  return res.json({data:deleteuser})
});  


//Find task

app.get('/api/find/:id', async (req,res) => {
  const taskId = req.params.id;

  const taskData = await taskModel.findOne({id:taskId});

  if(taskData){
    return res.json({data:taskData})
  } else {
    return res.json({data:"No Record Found"})
  }
});

//Update reminder

app.put('/api/updateTask/reminder', async (req,res) => {
  // const reminder = req.body.reminder;
  // const id = req.body.id;
  const data = req.body;
  const updateReminder = await taskModel.findOneAndUpdate(
    {id:data.id},
    {reminder:data.reminder},
    {new:true}
  );
  return res.json({data:updateReminder});
})

//Update Task

app.put("/api/updateTask/:id",async(req,res) => {
  const id = req.params.id;
  const text = req.body.text;
  const day = req.body.day;

  const updateTask = await taskModel.findOneAndUpdate(
    {id: id},
    {text: text,day: day},
    {new: true}

  );
  return res.json({data : updateTask})
});