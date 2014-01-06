/*
  Use this file as a template for configuring the 
  database connection aspect of the application.
  
  Rename this file to databases.js and update
  the following configuration:
*/

exports.redis = {
  port: '6379',
  host: '127.0.0.1',
  options: {},
  channel: 'crunch:cartography:persistence'
};

exports.sequelize = {
  type: 'mysql',
  hostname: 'localhost',
  port: 3306,
  db: 'mydbname',
  user: 'dbuser',
  password: 'dbpass'
};