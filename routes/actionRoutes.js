const actionRoute = require('express').Router();
const actionModel = require('../data/helpers/actionModel');

//Routes for Action CRUD 

actionRoute.get('api/actions' , (req , res) => {
    actionModel.get()
    .then( actions => {
        res.status(200)
        .json(actions);
    })
    .catch( err => {
        res.status(404)
        json({errorMessage: 'Failed to get actions'})
    })
})




module.exports = actionRoute;

