const models = require('../server/models/index');
const User = require('../userComponent/user');
const Address = require('./address');
console.log(User);
User.hasMany(Address,{ foreignKey: 'userId', onDelete: 'CASCADE'});
Address.belongsTo(User, {foreignKey: 'userId', onDelete: 'CASCADE'});
module.exports = {
  
  create(req, res) {
    return models.Address
      .create({
        addressType: req.body.addressType,
        houseNumber: req.body.houseNumber,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        pinCode: req.body.pinCode,
        userId: req.params.userId,
      })
      .then(address => res.status(201).send(address))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return models.Address
      .find({
        where: {
          id: req.params.id,
          // userId: req.params.userId,
        },
      })
      .then((address) => {
        if (!address) {
          return res.status(404).send({
            message: 'Address Not Found',
          });
        }
        return address
          .update({
            addressType: req.body.addressType || address.addressType,
            houseNumber: req.body.houseNumber || address.houseNumber,
            country: req.body.country || address.country,
            state: req.body.state || address.state,
            city: req.body.city || address.city,
            pinCode: req.body.pinCode || address.pinCode,
          })
          .then(() => res.status(200).send(address))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));

  },

  destroy(req, res) {
    return models.Address
      .find({
        where: {
          id: req.params.userId,
        },
      })
      .then((address) => {
        if (!address) {
          return res.status(404).send({
            message: 'Address Not Found',
          });
        }
        return address
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

};