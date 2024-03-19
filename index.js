const express = require('express');
const dotenv = require('dotenv');

//initial vareables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
