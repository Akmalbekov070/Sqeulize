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
			imageUrl: {
				type: Sequelize.STRING(1000),
				allowNull: true,
			},
			text: {
				type: Sequelize.STRING(500),
				allowNull: false,
			},
		},
		{
			timestamps: true,
		}
	);
	return Diary;
};
