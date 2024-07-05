const db = require('../models/index');
const Diary = db.diary;

// Description: Get all myDiary page
// Route: GET /diary/my
// Access: Private
const myDiary = (req, res) => {
	res.render('diary/my-diary');
};

// Description: Add a diary entry
// Route: POST /diary/my
// Access: Private
const addMyDiary = async (req, res) => {
	try {
		const { text, ImageUrl } = req.body;

		// Validate input
		if (!text) {
			return res.status(400).send('Text is required');
		}

		// Create diary entry
		await Diary.create({
			ImageUrl: ImageUrl,
			text: text,
		});

		// Redirect to my diary page
		res.redirect('/diary/my');
	} catch (error) {
		console.error(error);
		res.status(500).send('Server Error');
	}
};

module.exports = {
	myDiary,
	addMyDiary,
};
