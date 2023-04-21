const Sequelize = require('sequelize');

const sequelize = new Sequelize('dipadb', 'root', 'root@123mysql@#work**', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try{
    sequelize.authenticate();
    console.log('Connected to the database');
  }catch(error){
    console.error('Unable to connect to the database',error);
  }

  module.exports = {sequelize};