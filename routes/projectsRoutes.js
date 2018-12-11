const projectRoute = require('express').Router();
const projectDb = require('../data/helpers/projectModel.js');

//Routes for Project CRUD 

//Get retrieve all projects

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

//Post new project

projectRoute.post('/api/projects', (req, res) => {
    const project = req.body;
    const name = req.body.name;
  if( name !== undefined && name.length > 128 ) {
    projectDb.insert(project)
     .then( projects => {
        res.status(201)
        .send(projects)
     })
    }
    else {
        res.status(400)
        .json({errorMessage: "Bad post command"});
    }
    res.catch( err => {
        res.status(500)
        .json({errorMessage: "Server error"})
    })
})

//Get by ID

projectRoute.get('/api/projects/:id', (req, res) => {
    const projectId = req.params.id;
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

//Update existing project
projectRoute.put('/api/projects/:id', (req, res) => {
    const project = req.body;
    const id = req.params.id;
    console.log("id", project)
    projectDb.update(id, project)
    .then( projUpdate => {
            res.status(200)
            .sendStatus(projUpdate);
    })
    .catch( err => {
        res.status(400)
        .json({errorMessage: "Bad Update Command"})
    })
})

//Delete existing project

projectRoute.delete('/api/project/:id', (req , res) => {
    const id = req.params.id;
    console.log("id", id);
    projectDb.remove(id)
        .then( removedProject => {
            res.status(200)
            .json({message: "Deleted Project"})
        })
        .catch(err => {
            res.status(400)
            .json({errorMessage: "Bad delete request" })
        })
})




module.exports = projectRoute;
