const Sequelize = require('sequelize');

const sequelize = new Sequelize('diarybook', 'postgres', '1234567', {
	host: 'localhost',
	port: 5433,
	dialect: 'postgres',
});
module.exports = sequelize;
