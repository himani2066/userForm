module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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


  User.associate = (models) => {
      User.hasMany(models.Address, {
        foreignKey: 'userId',
        as: 'addresses',
      });
    };

  return User;
};