const User = require('../models').User;
const Address = require('../models').Address;

module.exports = {

  create(req, res) {
    return User
      .create({
        fullName: req.body.fullName,
        emailId: req.body.emailId,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        userType: req.body.userType
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  fetchAllV1(req, res) {
  	return User.findAll({
      include: [{
        model: Address,
        as: 'addresses',
      }],
      order: ['id'],
    })
  	  .then(users => res.status(200).send(users))
  	  .catch(error => res.status(400).send(error));
  },

  fetchAllV2(req, res) {
    return User.findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },

  fetchOne(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: Address,
          as: 'addresses',
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
       .findById(req.params.userId, {
          include: [{
            model: Address,
            as: 'addresses',
          }],
        })
       .then(user => {
         if (!user) {
           return res.status(404).send({
             message: 'User Not Found',
           });
         }
         return user
           .update({
             fullName: req.body.fullName || user.fullName,
             emailId: req.body.emailId || user.emailId,
             password: req.body.password || user.password,
             phoneNumber: req.body.phoneNumber || user.phoneNumber,
             userType: req.body.userType || user.userType,
           })
           .then(() => res.status(200).send(user))
           .catch((error) => res.status(400).send(error));
       })
       .catch((error) => res.status(400).send(error));
  },

  destroyV1(req, res) {
     return User
       .findById(req.params.userId)
       .then(user => {
         if (!user) {
           return res.status(400).send({
             message: 'User Not Found',
           });
         }
         return user
           .destroy({force: true})
           .then(() => res.status(204).send())
           .catch((error) => res.status(400).send(error));
       })
       .catch((error) => res.status(400).send(error));
  },

  destroyV2(req, res) {
     return User
       .findById(req.params.userId)
       .then(user => {
         if (!user) {
           return res.status(400).send({
             message: 'User Not Found',
           });
         }
         return user
           .destroy()
           .then(() => res.status(204).send())
           .catch((error) => res.status(400).send(error));
       })
       .catch((error) => res.status(400).send(error));
  },
  
};
