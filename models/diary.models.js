module.exports = (sequelize, Sequelize) => {
	const Diary = sequelize.define(
		'diary',
		{
			id: {
				type: Sequelize.INTEGER,
				auttoIcrement: true,
				allowNull: false,
				primaryKey: true,
			},
			text: {
				type: Sequelize.STRING(500),
				allowNull: false,
			},
			imageUrl: {
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
