import React from 'react';
import {Button} from 'semantic-ui-react'
function Submit(props)
{
    return (
        <Button onClick={props.onClick}>Save</Button>
    )
}
export default Submit