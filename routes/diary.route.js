const { Router } = require('express');
const { myDiary, addMyDiary } = require('../controllers/diary.controllers');
const router = Router();

router.get('/my', myDiary);
router.post('/my', addMyDiary);

module.exports = router;
