const projectRoute = require('express').Router();
const projectDb = require('../data/helpers/projectModel');

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

projectRoute.put('/api/project/:id', (req , res) => {
    const project = req.body;
    const id = req.params.id;
 if(id) {
     projectDb.update(id , project)
        .then( updateProj => {
            res.status(200)
            .sendStatus(updateProj)
        })
    }
 else {
    res.status(404)
     .json({message: "Project does not exist"})
 }
    res.status(500)
    .json({message: "Server error"})
 
})





module.exports = projectRoute;
