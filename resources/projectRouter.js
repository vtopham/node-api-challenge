//projects 
const express = require('express')
const pModel = require('../data/helpers/projectModel')

const router = express.Router();

//get a list of all projects
router.get('/', (req, res) => {
    pModel.get().then(projects => {
        res.status(200).json({data: projects})
    }).catch(error => {
        res.status(500).json({message: "Error retrieving data", error: error})
    })
})

//create a new project
router.post('/', validateProject, (req, res) => {
    pModel.insert(req.body).then(resource => {
        res.status(201).json({message: "Project successfully created!", data: resource})
    }).catch(error => {
        res.status(500).json({message: "Error creating project", error: error})
    })
})

//get projects by id
router.get('/:id', validateProjectId, (req, res) => {
    pModel.get(req.params.id).then(project => {
        res.status(200).json({data: project})
    }).catch(error => {
        res.status(500).json({message: "Error retrieving data", error: error})
    })
})

//delete a project by id
router.delete('/:id', validateProjectId, (req, res) => {
    pModel.remove(req.params.id).then(deleted => {
        res.status(200).json({message: `${deleted} record successfully deleted.`})
    }).catch(error => {
        res.status(500).json({message: "Error deleting project", error: error})
    })
})

//edit a post by id
router.put('/:id', validateProject, validateProjectId, (req, res) => {
    pModel.update(req.params.id, req.body).then(resource => {
        res.status(200).json({message: "Project successfully updated", data: resource})
    }).catch(error => {
        res.status(500).json({message: "Error updating project", error: error})
    })
    
})

//get actions by project id
router.get('/:id/actions', (req, res) => {
    
})

//custom middleware

function validateProjectId(req, res, next) {
    pModel.get(req.params.id).then(resource => {
        if (!resource) {
            res.status(404).json({message: "Project not found"})
        } else {
            next();
        }
        
    }).catch(error => {
        res.status(500).json({message: "Error retrieving data", error: error})
    })
}

function validateProject(req, res, next) {
    if (!req.body) {
        res.status(400).json({message: "Please include a body on this request with the project data."})
    } else if (!req.body.name || !req.body.description ) {
        res.status(400).json({message: "Please remember to include the name, description, and notes for the project"})
    } else {
        next();
    }
}



module.exports = router;