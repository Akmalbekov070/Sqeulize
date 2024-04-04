const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const app = express();
const db = require('./models/index');
//initial vareables
dotenv.config();

//initialize templete (handlebars)
app.engine('.hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', '.hbs');

//ntialize routes
app.use('/diary', require('./routes/diary.route'));

const PORT = process.env.PORT || 3000;
const start = async () => {
	try {
		const connect = await db.sequelize.sync();
		console.log(connect);
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};
start();
