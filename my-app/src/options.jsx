import React, {useState} from 'react'
import {Input} from 'semantic-ui-react'

function Options(props)
{
    return (
        <>
        <br />
        <ul>
        <li>
        <Input name={props.name} onChange={props.onChange} placeholder={props.option} />
        </li>
        </ul>
        </>
    )
}
export default Options