import React, {useState} from 'react'

function State()
{
    var [state, setType] = useState({
        type: 'choice',
        title: '',
        description: '',
        expiry: '',
        taskQuestion: '',
        taskOption1: '',
        taskOption2: '',
        taskOption3: '',
        masterWorker: '',
        reward: '',
        numberOfWorkers: ''
      })
    
        // Function to handle the change on all fields and then update the complex state
        const handleChange = (e) =>
        {
          const value = e.target.value
          const name = e.target.name
          // Updating the complex state based on the name of the field being filled out
          setType((preValue) =>{
            switch(name)
            {
              case 'radioGroup':
                return{
                  type:value,
                  description: preValue.description,
                  expiry:preValue.expiry,
                  title: preValue.title,
                  taskQuestion: preValue.taskQuestion,
                  taskOption1: preValue.taskOption1,
                  taskOption2: preValue.taskOption2,
                  taskOption3: preValue.taskOption3,
                  masterWorker: preValue.masterWorker,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                }
              case 'title':
                return{
                  title:value,
                  type: preValue.type,
                  description: preValue.description,
                  expiry:preValue.expiry,
                  taskQuestion: preValue.taskQuestion,
                  taskOption1: preValue.taskOption1,
                  taskOption2: preValue.taskOption2,
                  taskOption3: preValue.taskOption3,
                  masterWorker: preValue.masterWorker,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                  
                }
              case 'description':
                return{
                  description: value,
                  type: preValue.type,
                  title:preValue.title,
                  expiry:preValue.expiry,
                  taskQuestion: preValue.taskQuestion,
                  taskOption1: preValue.taskOption1,
                  taskOption2: preValue.taskOption2,
                  taskOption3: preValue.taskOption3,
                  masterWorker: preValue.masterWorker,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                }
              case 'expiry':
                return{
                  expiry: value,
                  type: preValue.type,
                  title:preValue.title,
                  description: preValue.description,
                  taskQuestion: preValue.taskQuestion,
                  taskOption1: preValue.taskOption1,
                  taskOption2: preValue.taskOption2,
                  taskOption3: preValue.taskOption3,
                  masterWorker: preValue.masterWorker,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                  
                }
                case 'taskQuestion':
                return{
                  taskQuestion: value,
                  expiry: preValue.expiry,
                  type: preValue.type,
                  title:preValue.title,
                  description: preValue.description,
                  taskOption1: preValue.taskOption1,
                  taskOption2: preValue.taskOption2,
                  taskOption3: preValue.taskOption3,
                  masterWorker: preValue.masterWorker,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                  
                }
                case 'optionOne':
                return{
                  taskOption1: value,
                  taskQuestion: preValue.taskQuestion,
                  expiry: preValue.expiry,
                  type: preValue.type,
                  title:preValue.title,
                  description: preValue.description,
                  taskOption2: preValue.taskOption2,
                  taskOption3: preValue.taskOption3,
                  masterWorker: preValue.masterWorker,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                  
                  
                }
                case 'optionTwo':
                return{
                  taskOption2: value,
                  taskQuestion: preValue.taskQuestion,
                  expiry: preValue.expiry,
                  type: preValue.type,
                  title:preValue.title,
                  description: preValue.description,
                  taskOption1: preValue.taskOption1,
                  taskOption3: preValue.taskOption3,
                  masterWorker: preValue.masterWorker,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                  
                  
                }
                case 'optionThree':
                return{
                  taskOption3: value,
                  taskOption2: preValue.taskOption2,
                  taskQuestion: preValue.taskQuestion,
                  expiry: preValue.expiry,
                  type: preValue.type,
                  title:preValue.title,
                  description: preValue.description,
                  taskOption1: preValue.taskOption1,
                  masterWorker: preValue.masterWorker,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                  
                }
                case 'yes/no':
                return{
                  masterWorker: value,
                  taskOption3: preValue.taskOption3,
                  taskOption2: preValue.taskOption2,
                  taskQuestion: preValue.taskQuestion,
                  expiry: preValue.expiry,
                  type: preValue.type,
                  title:preValue.title,
                  description: preValue.description,
                  taskOption1: preValue.taskOption1,
                  reward: preValue.reward,
                  numberOfWorkers: preValue.numberOfWorkers,
                  
                }
                case 'reward':
                return{
                  reward: value,
                  masterWorker: preValue.masterWorker,
                  taskOption3: preValue.taskOption3,
                  taskOption2: preValue.taskOption2,
                  taskQuestion: preValue.taskQuestion,
                  expiry: preValue.expiry,
                  type: preValue.type,
                  title:preValue.title,
                  description: preValue.description,
                  taskOption1: preValue.taskOption1,
                  numberOfWorkers: preValue.numberOfWorkers,
                  
                }
                case 'numberOfWorkers':
                return{
                  numberOfWorkers: value,
                  reward: preValue.reward,
                  masterWorker: preValue.masterWorker,
                  taskOption3: preValue.taskOption3,
                  taskOption2: preValue.taskOption2,
                  taskQuestion: preValue.taskQuestion,
                  expiry: preValue.expiry,
                  type: preValue.type,
                  title:preValue.title,
                  description: preValue.description,
                  taskOption1: preValue.taskOption1
                  
                }
            }
            
          })
         
            
            console.log(name)
            console.log(state.type)
            console.log(state.title)
            console.log(state.description)
            console.log(state.taskQuestion)
            console.log(state.taskOption1)
            console.log(state.masterWorker)
        }
        
        const handleSubmit = () =>
        {
          fetch('http://localhost:5000/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
          
              taskType: state.type,
              taskTitle: state.title,
              taskDescription: state.description,
              taskExpiry: state.expiry,
              taskQuestion: state.taskQuestion,
              taskOption1: state.taskOption1,
              taskOption2: state.taskOption2,
              taskOption3: state.taskOption3,
              masterWorker: state.masterWorker,
              reward: state.reward,
              numberOfWorkers: state.numberOfWorkers
    
            })
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(err => {
            console.log(err)
          })
        }
}
export default State