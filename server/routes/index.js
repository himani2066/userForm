const usersController = require('../controllers').users;
const addressesController = require('../controllers').addresses;
var routesVersioning = require('express-routes-versioning')();

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the User API!',
  }));

  //By default, accept-version headers are used for versioning,
  app.get('/api/users', routesVersioning({ 
    "1.0.0": usersController.fetchAllV1, 
    "2.0.0": usersController.fetchAllV2 
    }));

  // app.get('/api/users', usersController.fetchAll);
  // app.get('/api/users/:userId', usersController.fetchOne);
  app.post('/api/user', usersController.create);
  app.put('/api/user/:userId', usersController.update);
  // app.delete('/api/user/:userId', usersController.destroy);
  app.delete('/api/user/:userId', routesVersioning({ 
    "1.0.0": usersController.destroyV1, 
    "2.0.0": usersController.destroyV2 
    }));

  app.post('/api/user/:userId/address', addressesController.create); 
  app.put('/api/user/:id/address', addressesController.update); 
  app.delete('/api/user/:userId/address', addressesController.destroy); 
};