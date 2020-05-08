import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'


import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'


const StyledDiv = styled.div`
    display: flex;
    height: 100vh;
   
    .title {
        padding: 4%;
        background: #FE5252;
        
        width: 20%;
        h1, h4 {
            color: white;
        }
        h4 {
            padding-top: 10%;
        }
    }

    .project-container {
        padding: 4%

    }
    

`

const View = props => {

    const dummyData = {id: 1, name: "Example task", completed: false, description: "example description"} //TODO
    const [projects, setProjects] = useState([dummyData]) //TODO


    const getData = _ => {
        //set an array of all projects
        axios.get('http://localhost:8000/projects')
            .then(response => {
                // console.log(response)
                setProjects(response.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(_ => {
        // getData(); TODO
    },[])

    return (
        <StyledDiv>
            <div className = "title">
                <h1>Hacker Tracker</h1>
                <h4>Track your projects and actions all in once place</h4>
            </div>
            <div className = "project-container">
            {projects.map(project => {
                console.log(project)
                return <ProjectCard key = {project.id} project = {project}/>
            })}
            </div>
        </StyledDiv>
    )
}

export default View