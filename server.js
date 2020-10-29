const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const { response } = require("express")
const mongoose = require("mongoose")
const Task = require("./models/task")
const cors = require("cors")


mongoose.connect("mongodb://localhost:27017/taskDB", {useNewUrlParser: true})







const app = express()
// var userID = 0

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(cors())


// respondes when a task has been added
app.get('/', (request, response) => 
{
    response.send("Task added")
})

// Post method
app.post('/', (request, response)=> {
    // Pulls information from React 
    const taskType = request.body.taskType
    const taskTitle = request.body.taskTitle
    const taskDescription = request.body.taskDescription
    const taskExpiry = request.body.taskExpiry
    const taskQuestion = request.body.taskQuestion
    const taskOption1 = request.body.taskOption1
    const taskOption2 = request.body.taskOption2
    const taskOption3 = request.body.taskOption3
    const masterWorker = request.body.masterWorker
    const reward = request.body.reward
    const numberOfWorkers = request.body.numberOfWorkers
    
    // Puts data into the Databse model
    const task = new Task(
        {
            taskType: taskType,
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskExpiry: taskExpiry,
            taskQuestion: taskQuestion,
            taskOption1: taskOption1,
            taskOption2: taskOption2,
            taskOption3: taskOption3,
            masterWorker: masterWorker,
            reward: reward,
            numberOfWorkers: numberOfWorkers

            
            
        }
    )
    

   
   
    

    // Saves the Data in the DB 
    task.save().then(function(){
        response.json("User added")
  
    }).then(function(){
        console.log(taskType)
       
    }).catch(function(error){
        console.log(error.message)
        response.json(error.message)
    })
})
       

app.listen(5000, (request, response)=>{
    console.log("server is running")
})