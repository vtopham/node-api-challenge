import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import ActionCard from './ActionCard'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        margin: 2% 0;
        text-align: left;
        padding-bottom: 4% ;
        border-bottom: 1px solid #999999;
    }
    .description {
        padding-bottom: 4%;
    }
    p {
        margin: 2% 0;
    }

    button {
        background: #FE5252;
        width: 70%;
        align-self: center;
        color: white;
        border-radius: 10px;
        padding: 2% 1%;
        font-size: 1.1rem;
        border: 2px solid white;

        &: hover {
            color: #FE5252;
            background: white;
            border: 2px solid #FE5252;
        }
    }


`

const ProjectCard = ({ project }) => {

    const dummyData = {id: 1, description: "An action", notes: "these are some notes", completed: false} //TODO
    const [actions, setActions] = useState([dummyData]) //TODO
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
            // getActions() //TODO

        } else {
            //if viewActions was true, clear and reset
            setViewActions(false)
            setActions([])
        }
        


    }
    return(
        <StyledDiv>
            <h2 className = "project-name">{project.name} </h2>
            <p className = "completed-status">{project.completed ? "Complete" : "Not Yet Complete"}</p>
            <p className = "description">{project.description}</p>
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