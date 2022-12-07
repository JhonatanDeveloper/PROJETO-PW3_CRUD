const Sequelize = require('sequelize');

const connection = new Sequelize(
    'api_manga',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;