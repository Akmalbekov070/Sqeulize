const { Router } = require('express');
const { myDiary, addMyDiary } = require('../controllers/diary.controllers');
const router = Router();

router.get('/my', myDiary);
router.post('/add', addMyDiary);

module.exports = router;
