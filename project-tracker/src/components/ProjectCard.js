import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import ActionCard from './ActionCard'

const StyledDiv = styled.div`


`

const ProjectCard = ({ project }) => {


    const [actions, setActions] = useState([])
    const [viewActions, setViewActions] = useState(false)

    const getActions = _ => {
        axios.get(`http://localhost:8000/projects/${project.id}/actions`)
            .then(response => {
                setActions(response.data.data)
            })
            .catch(error => console.log(error))
    }   

    const handleView = event => {
        event.preventDefault();
            //if we weren't looking at the actions
        if(!viewActions) {
            //change it so we're viewing, should be true
            setViewActions(true)
            //get our actions and set them to state
            getActions()

        } else {
            //if viewActions was true, clear and reset
            setViewActions(false)
            setActions([])
        }
        


    }
    return(
        <StyledDiv>
            <h2>{project.name} </h2>
            <p className = "completed-status">{project.completed ? "Complete" : "Not Yet Complete"}</p>
            <p>{project.description}</p>
            <p> Notes: {project.notes}</p>
            {/* When you click this button, it either sets or clears the actions */}
            <button onClick = {handleView}>{viewActions ? "Hide Actions" : "View Actions"}</button>
            <div className = "actions">
                {actions.map(action => {
                    return <ActionCard key = {action.id} action = {action} />
                })}
            </div>
            
        </StyledDiv>
    )
}

export default ProjectCard