const Sequelize = require('sequelize');

const sequelize = new Sequelize('diarybook', 'postgres', '1234567', {
	host: 'localhost',
	// port: 5432,
	dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.diary = require('./diary.models')(sequelize, Sequelize);
module.exports = db;
