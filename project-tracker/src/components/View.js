import React, {useState, useEffect} from 'react'
import axios from 'axios'


import ProjectCard from './ProjectCard'
import ProjectForm from './ProjectForm'




const View = props => {

    const [projects, setProjects] = useState([])


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
        getData();
    },[])

    return (
        <>
            <h1>Welcome To Project Tracker</h1>
            {console.log(projects)}
            {projects.map(project => {
                return <ProjectCard />
            })}
        </>
    )
}

export default View