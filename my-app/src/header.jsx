import React from 'react'
import {Header} from 'semantic-ui-react'
import './header.css'

function header(props)
{
    return (
        <Header  className="title" as='h3' dividing >
            {props.title}
        </Header>
    )
}
export default header