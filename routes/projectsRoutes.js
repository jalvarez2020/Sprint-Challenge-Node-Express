const projectRoute = require('express').Router();
const projectDb = require('../data/helpers/projectModel');

//Routes for Project CRUD 

projectRoute.get('/api/projects', ( req , res ) => {
    projectDb.get()
     .then( projects => {
            res.status(200)
            .send(projects)
        })
     .catch(err => {
            res.status(500)
            .json({errorMessage: "Failed to load projects"})
    })
})

projectRoute.post('/api/projects', (req, res) => {
    const project = req.body;
    console.log(project)
    projectDb.insert(project)
     .then( projects => {
        res.status(201)
        .send(projects)
    })
     .catch( err => {
        res.status(400)
        .json({errorMessage: "Bad post command"});
    })
})

projectRoute.get('/api/projects/:id', (req, res) => {
    const projectId = req.body.params.id;
    projectDb.get(projectId)
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
