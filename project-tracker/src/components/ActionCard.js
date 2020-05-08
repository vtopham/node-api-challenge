import React from 'react'

const ActionCard = props => {
    const { action } = props
    console.log(action)
    return(
        <>
        <h3>{action.description}</h3>
        <p>Notes: {action.notes}</p>
        <p className = "completed-status">{action.completed ? "This action has been completed" : "This action is not yet complete."}</p>
        </>
    )
}

export default ActionCard