const { Router } = require('express');
const { myDiary } = require('../controllers/diary.controllers');
const router = Router();

router.get('/my', myDiary);

module.exports = router;
