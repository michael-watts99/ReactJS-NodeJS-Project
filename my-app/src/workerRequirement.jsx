import React from 'react'
import { Form} from 'semantic-ui-react'
import TaskInput from './taskInput'
import './taskType.css'
function workerRequirement(props)
{
    return (
        <>
        <Form >
            
        <Form.Group inline>
        <h3 className="header"> Worker Master Workers: </h3>

        <label style={{fontSize: 20 + 'px'}}>Yes
        <input 
            type="radio"
            label='Choice Task'
            name='yes/no'
            value='yes'
            onChange={props.onChange}
            
            
            
            
            
          />
          </label>

        
        <label style={{fontSize: 20 + 'px'}}>No
        <input 
            type="radio"
            label='Choice Task'
            name='yes/no'
            value='no'
            onChange={props.onChange}
            
            
            
            
            
          />
          </label>
        
        
        
        </Form.Group >
    </Form>

    <TaskInput onChange={props.onChange} name="reward" label="Reward per Response" />
    <br />
    <br />
    <TaskInput onChange={props.onChange} name="numberOfWorkers" label="Number of Workers" />
    </>
    )
}
export default workerRequirement