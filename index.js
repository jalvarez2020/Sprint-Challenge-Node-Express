const express = require('express');
const server = express();
const projectRoutes = require('./routes/projectsRoutes');
const actionsRoute = require('./routes/actionRoutes');
const PORT = 4020;


server.use(express.json())


server.use('/projects', projectRoutes);

server.use('/actions', actionsRoute);





server.listen(PORT, () => {
    console.log(`Server listening...`)
})