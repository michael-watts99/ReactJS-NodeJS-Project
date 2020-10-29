import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'

function gridItem(props)
{
    return(
        <Grid.Column width='two'>
            <Segment>{props.menuItem}</Segment>
        </Grid.Column>
        
    )
}

export default gridItem