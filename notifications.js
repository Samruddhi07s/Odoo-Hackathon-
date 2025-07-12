const express = require('express');
const router = express.Router();
const {
  getNotifications,
  markAllRead
} = require('../controllers/notificationsController');

router.get('/:userId', getNotifications);
router.put('/:userId/read', markAllRead);

module.exports = router;
