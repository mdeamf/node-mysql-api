const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post.controller');

router.get('/', postsController.index);

module.exports = router;