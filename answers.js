const express = require('express');
const router = express.Router();
const { postAnswer, getAnswersByQuestionId } = require('../controllers/answersController');

router.get('/:questionId', getAnswersByQuestionId);
router.post('/', postAnswer);

module.exports = router;
