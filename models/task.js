const mongoose = require("mongoose")

// Database Schema
const taskSchema = new mongoose.Schema(
    {
        // _id: Number,
        taskType: {
            type: String,
            required: [true]
            
        },
        taskTitle: {
            type: String,
            required: [true]
        },
        taskDescription: {
            type: String
        },
        taskExpiry: {
            type: String
        },
        taskQuestion: {
            type: String
        },
        taskOption1: {
            type: String
        },
        taskOption2: {
            type: String
        },
        taskOption3: {
            type: String
        },
        masterWorker: {
            type: String
        },
        reward: {
            type: String
        },
        numberOfWorkers: {
            type: String
        }
        
})
module.exports = mongoose.model("Task", taskSchema)