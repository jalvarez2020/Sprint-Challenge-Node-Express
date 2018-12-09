const projectRoute = require('express').Router();
const projectModel = require('../data/helpers/projectModel');

//Routes for Project CRUD 

projectRoute.get('/', ( req , res ) => {
    projectModel.get()
     .then( projects => {
            res.status(200)
            .send(projects)
        })
     .catch(err => {
            res.status(500)
            .json({errorMessage: "Failed to load projects"})
    })
})

projectRoute.post('/', (req, res) => {
    const project = req.body;
    projectModel.insert(project)
     .then( projects => {
        res.status(201)
        .send(projects)
    })
     .catch( err => {
        res.status(400)
        .json({errorMessage: "Bad post command"});
    })
})

projectRoute.get('/:id', (req, res) => {
    const projectId = req.body.params.id;
    projectModel.get(projectId)
     .then(project => {
            res.status(200)
                .send(project)
        })
     .catch(err => {
            res.status(400)
            .json({errorMessage: "Could not retrieve project"})
     })
    
})





module.exports = projectRoute;
