const Sequelize = require('sequelize');
const conn = require('./database');

const sequelize = new Sequelize('dipadb', 'root', 'root@123mysql@#work**', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  module.exports = {User};


  