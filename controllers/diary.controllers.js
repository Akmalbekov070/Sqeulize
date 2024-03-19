//Desc      get all myDiary page
//Route     /diary/my
//Accses    Private
const myDiary = (req, res) => {
	res.render('diary/my-diary');
};

module.exports = {
	myDiary,
};
