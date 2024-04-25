module.exports = (sequelize, Sequelize) => {
	const Diary = sequelize.define(
		'diary',
		{
			id: {
				type: Sequelize.INTEGER,
				auttoIcrement: true,
				allowNull: true,
				primaryKey: true,
			},
			text: {
				type: Sequelize.STRING(500),
				allowNull: false,
			},
			ImageUrl: {
				type: Sequelize.STRING(1000),
				allowNull: true,
			},
		},
		{
			timestamps: true,
		}
	);
	return Diary;
};
