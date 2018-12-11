const actionRoute = require('express').Router();
const actionDb = require('../data/helpers/actionModel');

//Routes for Action CRUD 

actionRoute.get('api/actions', ( req , res ) => {
    actionDb.get()
     .then( projects => {
            res.status(200)
            .send(projects)
        })
     .catch(err => {
            res.status(500)
            .json({errorMessage: "Failed to load projects"})
    })
})




module.exports = actionRoute;

