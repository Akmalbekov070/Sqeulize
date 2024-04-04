const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const app = express();
const sequelize = require('./config/db');
//initial vareables
dotenv.config();

//initialize templete (handlebars)
app.engine('.hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', '.hbs');

//ntialize routes
app.use('/diary', require('./routes/diary.route'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
