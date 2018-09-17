const db = require('../server/models/index');

  const Address = db.sequelize.import('addresses',function(sequelize, DataTypes){ 

  return sequelize.define('Address', {
    addressType: {
     type: DataTypes.STRING,
    },
    houseNumber: {
     type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    city: {
     type: DataTypes.STRING,
    },
    pinCode: {
      type: DataTypes.STRING,
    },
  });
});
  // Address.associate = function(models) {
  //   // associations can be defined here
  //   Address.belongsTo(models.User, {
  //         foreignKey: 'userId',
  //         onDelete: 'CASCADE',
  //       });
  //     };
      


module.exports = Address;