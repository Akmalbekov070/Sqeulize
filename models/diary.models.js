const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Diary = sequelize.define('diary', {
	id: {
		type: DataTypes.INTEGER,
		auttoIcrement: true,
		allowNull: false,
		primaryKey: true,
	},
	text: {
		type: DataTypes.STRING(500),
		allowNull: false,
	},
});
