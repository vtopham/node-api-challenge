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
router.post('/', (req, res) => {

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

}



module.exports = router;