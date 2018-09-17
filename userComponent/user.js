const db = require('../server/models/index');

  const User = db.sequelize.import('users',function(sequelize, DataTypes){ 
   return sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    emailId: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    userType: {
    	type: DataTypes.STRING,
    	allowNull: true,
    }
  });
});

  // User.associate = (models) => {
  //     User.hasMany(models.Address, {
  //       foreignKey: 'userId',
  //       as: 'addresses',
  //     });
  //   };

module.exports = User;