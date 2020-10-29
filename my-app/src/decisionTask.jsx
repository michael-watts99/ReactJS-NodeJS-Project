import React, {useState} from 'react'
import {Input} from 'semantic-ui-react'

function DecisionTask(props)
{
    return (
        <>
        <h1> Decision Task</h1>
        
        <Input name="taskQuestion" onChange={props.onChange} fluid placeholder="Enter a true or false question"/>
        </>
    )
}
export default DecisionTask