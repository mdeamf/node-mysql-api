const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post.controller');

router.post('/', postsController.save);

module.exports = router;