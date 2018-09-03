module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      addressType: {
        type: Sequelize.STRING,
      },
      houseNumber: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      pinCode: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      userId: {
              type: Sequelize.INTEGER,
              onDelete: 'CASCADE',
              references: {
                model: 'Users',
                key: 'id',
                as: 'userId',
              },
      },
    }),
  down: (queryInterface/* , Sequelize */) =>
    queryInterface.dropTable('Addresses'),
};