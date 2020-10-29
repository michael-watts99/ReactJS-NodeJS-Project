import React, {useState} from 'react'
import {Input} from 'semantic-ui-react'
import Options from './options'

function ChoiceTask(props)
{
    
    
    
    return(
        <>
        
        <h1> Choice Task</h1>
        
        <Input name="taskQuestion" onChange={props.onChange} fluid placeholder="Enter Question"/>
        <Options name="taskOption1" onChange={props.onChange} option="Option One"/>
        <Options name="taskOption2"  onChange={props.onChange} option="Option Two"/>
        <Options name="taskOption3" onChange={props.onChange} option="Option Three"/>
        </>
        
    )
}

export default ChoiceTask