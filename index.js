const express = require('express');
const server = express();
const helmet = require('helmet')
const logger = require('morgan');
const projectRoute = require('./routes/projectsRoutes');
const actionsRoute = require('./routes/actionRoutes');
const PORT = 5000;

//middleware
server.use(
    express.json(),
    helmet(),
    logger('tiny'),
 )



//project routes
server.use(
    projectRoute,
    projectRoute.get,
    projectRoute.post,
    projectRoute.put,
    projectRoute.delete
    );


//action routes
server.use(
    actionsRoute,
    );


server.listen(PORT, () => {
    console.log(`Server listening...`)
})