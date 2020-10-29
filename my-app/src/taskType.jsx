import React, {useState} from 'react'
import {Form} from 'semantic-ui-react'
import App from './App'
import './taskType.css'

const TaskType = (props) =>{
    
   
    
    return(
        <>
        
    <Form >
        <Form.Group inline>
          
            <h3 className="header"> Select Type of Task: </h3>
        <label className="radioButtonsLabels" style={{fontSize: 20 + 'px'}} >Choice Task
        <input 
            type="radio"
            label='Choice Task'
            name='radioGroup'
            value='choice'
            onChange={props.handleChange}
            defaultChecked
            className="radioButtons"
            
            
            
            
          />
          </label>

        
        <label className="radioButtonsLabels" style={{fontSize: 20 + 'px'}}>Decision-Making Task
        <input 
            type="radio"
            label='Choice Task'
            name='radioGroup'
            value='decision'
            onChange={props.handleChange}
            className="radioButtons"
            
            
            
            
          />
          </label>

        
        <label className="radioButtonsLabels" style={{fontSize: 20 + 'px'}}>Sentence-Level Task
        <input 
            type="radio"
            label='Choice Task'
            name='radioGroup'
            value='sentence'
            onChange={props.handleChange}
            className="radioButtons"
            
            
            
            
          />
          </label>

        
        </Form.Group >
    </Form>
    
    
    </>
    );
}
export default TaskType
