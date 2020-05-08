//actions
const express = require('express')
const aModel = require('../data/helpers/actionModel.js')
const pModel = require('../data/helpers/projectModel.js')

const router = express.Router();

//get a list of all actions
router.get('/', (req, res) => {
    aModel.get().then(resources => {
        res.status(200).json({data: resources})
    }).catch(error => {
        res.status(500).json({message: "Error retrieving data", error: error})
    })
})

//create an action
router.post('/', validateAction, (req,res) => {
    aModel.insert(req.body).then(resource => {
        res.status(200).json({message: "Action successfully added", data: resource})
    }).catch(error => {
        res.status(500).json({message: "Error adding action", error: error})
    })
})

//get action by id
router.get('/:id', validateActionId, (req, res) => {
    aModel.get(req.params.id).then(resource => {
        res.status(200).json({data: resource})
    }).catch(error => {
        res.status(500).json({message: "Error retrieving data", error: error})
    })
})

//delete an action by id
router.delete('/:id', (req, res) => {
    
})

//edit an action by id
router.put('/:id', (req, res) => {

})

//custom middleware

function validateActionId(req, res, next) {
    aModel.get(req.params.id).then(resource => {
        if(!resource) {
            res.status(404).json({message: "Action not found"})
        } else {
            next();
        }
    }).catch(error => {
        res.status(500).json({message: "Error validating the action Id", error: error})
    })

}

function validateAction(req, res, next) {

    //make sure all fields are there
    if (!req.body || !req.body.project_id || !req.body.description || !req.body.notes) {
        res.status(400).json({message: "Please include the project_id, description, and notes in the body of your request."})
    } else if (req.body.description.length > 128) {  //make description isn't too long
        res.status(400).json({message: "Please shorten your description to 128 charactesr or less."})
    } else { //make sure the action has a project id that's valid
        pModel.get(req.body.project_id).then(project => {
            
            if(!project) {
                res.status(404).json({message: "Project not found"})
            } else {
                //if everything is good, continue on
                next();
            }
        }).catch(error => {
            res.status(500).json({message: "Error validating project Id", error: error})
        })
    }

}


module.exports = router;