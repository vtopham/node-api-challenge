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
router.get('/:id', (req, res) => {

})

//delete a project by id
router.delete('/:id', (req, res) => {
    
})

//edit a post by id
router.put('/:id', (req, res) => {
    
})

//get actions by project id
router.get('/:id/actions', (req, res) => {
    
})

//custom middleware

function validateProjectId(req, res, next) {

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