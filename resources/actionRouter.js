//actions
const express = require('express')
const aModel = require('../data/helpers/actionModel.js')

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
router.post('/', (req,res) => {

})

//get action by id
router.get('/:id', (req, res) => {
    
})

//delete an action by id
router.delete('/:id', (req, res) => {
    
})

//edit an action by id
router.put('/:id', (req, res) => {

})

//custom middleware

function validateActionID(req, res, next) {

}

function validateAction(req, res, next) {

}


module.exports = router;