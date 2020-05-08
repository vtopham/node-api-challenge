//actions
const express = require('express')
const aModel = require('../data/helpers/actionModel.js')

const router = express.Router();

//get a list of all actions
router.get('/', (req, res) => {
    
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