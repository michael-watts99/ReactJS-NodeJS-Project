import React from 'react'

import ChoiceTask from './choiceTask'
import DecisionTask from './decisionTask'
import SentenceTask from './sentenceTask'

function TaskSetup(props)
{
    switch(props.state)
    {
        case 'choice':
            return(
                <ChoiceTask onChange={props.onChange}/>
            )
        case 'decision':
            return(
                <DecisionTask onChange={props.onChange}/>
            )
        case 'sentence':
            return(
                <SentenceTask onChange={props.onChange}/>
            )
        default:
            return(
                <h1>default</h1>
            )
            
    }

    
    
    
}
export default TaskSetup