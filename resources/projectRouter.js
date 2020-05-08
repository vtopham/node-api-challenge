const express = require('express')
const pModel = require('../data/helpers/projectModel')

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "You'r reached projects"})
})

module.exports = router;