import React, {useState} from 'react'
import {Input} from 'semantic-ui-react'

function SentenceTask(props)
{
    return (
        <>
        <h1> Sentence Task</h1>
        
        <Input name="taskQuestion" onChange={props.onChange}  fluid placeholder="Enter a sentence to be translated"/>
        </>
    )
}
export default SentenceTask