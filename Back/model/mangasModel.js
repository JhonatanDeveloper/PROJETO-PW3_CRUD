const Sequelize = require('sequelize');

const connection = require('../database/database');

const Mangas = connection.define(
    'tbl_mangas',
    {
        nome_mangas:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

//Mangas.sync({force:true});

module.exports = Mangas;




