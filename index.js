const express = require('express');
const server = express();
const helmet = require('helmet')
const logger = require('morgan');
const CM = require('./middleware/custom_middleware');
const projectRoute = require('./routes/projectsRoutes');
const actionsRoute = require('./routes/actionRoutes');
const PORT = 4020;

//middleware
server.use(
    express.json(),
    helmet(),
    logger('tiny'),
 )

//project routes
server.use(
    projectRoute,
    CM.NameLength, //custom middleware
    projectRoute.get,
    projectRoute.post,
    );

//action routes
server.use(
    actionsRoute,
    CM.DescriptionLength,
    );


server.listen(PORT, () => {
    console.log(`Server listening...`)
})