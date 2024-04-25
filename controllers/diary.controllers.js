const db = require('../models/index');
const diary = db.diary;
//Desc      get all myDiary page
//Route     get/diary/my
//Accses    Private
const myDiary = (req, res) => {
	res.render('diary/my-diary');
};

//Desc      get all myDiary page
//Route     POST/diary/my
//Accses    Private
const addMyDiary = async (req, res) => {
	try {
		const { text, ImageUrl } = req.body;
		await diary.create({
			ImageUrl: ImageUrl,
			text: text,
		});
		res.redirect('/diary/my');
	} catch (error) {
		console.log(error);
	}
};
module.exports = {
	myDiary,
	addMyDiary,
};
