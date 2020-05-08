import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    border: 1px solid #999999;
    border-radius: 10px;
    padding: 2% 4%;

    h3 {
        margin: 2% 0;
    }

`
const ActionCard = props => {
    const { action } = props
    console.log(action)
    return(
        <StyledDiv>
            <h3>{action.description}</h3>
            <p>Notes: {action.notes}</p>
            <p className = "completed-status">{action.completed ? "This action has been completed" : "This action is not yet complete."}</p>
        </StyledDiv>
    )
}

export default ActionCard