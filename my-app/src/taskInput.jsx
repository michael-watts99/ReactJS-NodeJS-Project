import React from 'react'
import {Input} from 'semantic-ui-react'

function taskInput(props)
{
    return (
        <Input name={props.name} onChange={props.onChange} label={props.label} placeholder={props.placeholder}/>
    )
}
export default taskInput