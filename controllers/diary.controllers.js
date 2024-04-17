const db = require('../models/index');
const Diary = db.diary;
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
		const { id, text, imageUrl } = req.body;
		console.log(req.body.id);
		await Diary.create({
			id: id,
			imageUrl: imageUrl,
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
