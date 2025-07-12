const express = require('express');
const router = express.Router();
const { getAllQuestions, postQuestion } = require('../controllers/questionsController');

router.get('/', getAllQuestions);
router.post('/', postQuestion);

module.exports = router;
