import React from 'react'
import {Header, Grid} from 'semantic-ui-react'
import GridItem from './gridItem'
import itemList from './menuList'
// Menu component to build each grid item
function menuComponent(item)
{
    return (
        // One created for each iteem in the menuItem Array
        <GridItem key= {item.key} menuItem = {item.title} />
       
        
        
    )
}

function headerMenu()
{
    return (
        <Header as='h3' dividing >
            <Grid columns='equal' >
                
                {/* Maps elements from the itemList to the menuComponent */}
                {itemList.map(menuComponent)}
            </Grid>
        </Header>
    )
}
export default headerMenu