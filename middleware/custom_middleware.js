// const NameLength = ( req, res, next ) => {
//     const name = req.body.name;
//     if( name.length > 128) {
//         res.status(400)
//         .json({errorMessage: "Name Length too long"})
//      }
//      else {
//     next();
//      }
// }

// const DescriptionLength = ( req, res, next ) => {
//     const description = req.body.description;
//     if( description.length > 128) {
//         res.status(400)
//         .json({errorMessage: "Description Length too long"})
//      }
//     next();
// }



// module.exports = {
//     DescriptionLength: DescriptionLength,
//     NameLength: NameLength,
// }